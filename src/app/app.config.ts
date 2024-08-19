import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CachingService } from './services/caching.service';
import { NgModel } from '@angular/forms';
import { ZoomInDirective } from './directives/zoom-in.directive';
import { cacheInterceptor } from './Interceptors/cache.interceptor';

export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([cacheInterceptor])),
    CachingService,
    ZoomInDirective

  ]
};
