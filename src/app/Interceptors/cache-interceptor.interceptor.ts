import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { get } from 'http';
import { Observable, of, tap } from 'rxjs';
import { CachingService } from '../services/caching.service';

export class cacheInterceptorInterceptor implements HttpInterceptor{

  constructor(private cacheService:CachingService) {}
  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {

    if(req.method!=='GET'){
      return next.handle(req)
    }
    const cachedResponse= this.cacheService.get(req.url)
    if(cachedResponse)
    {
      return of(new HttpResponse({body:cachedResponse, status:200}));
    }
    else{
      return next.handle(req).pipe(
        tap(event=>{
          if(event instanceof HttpResponse)
          {
            return this.cacheService.set(req.url,HttpResponse)
          }
        })
      )
    }


  }
}
