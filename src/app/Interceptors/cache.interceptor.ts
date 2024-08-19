import { HttpHandlerFn, HttpInterceptorFn } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { get } from 'http';
import { Observable, of, tap } from 'rxjs';
import { CachingService } from '../services/caching.service';
import { inject } from '@angular/core';

export const cacheInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:HttpHandlerFn) => {

  const caching= inject(CachingService)
  if (req.method !== 'GET') {
    return next(req);
  }

  // Retrieve cached response
  const cachedResponse = caching.get(req.url)

  if (cachedResponse) {
    // Return cached response as an observable
    return of(new HttpResponse({ body: cachedResponse, status: 200 }));
  } else {
    return next(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          // Cache the response
          caching.set(req.url, event.body);
        }
      })
    );
  }
};
