import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { cacheInterceptorInterceptor } from './Interceptors/cache-interceptor.interceptor';
import { CachingService } from './services/caching.service';
import { NgModel } from '@angular/forms';
import { ZoomInDirective } from './directives/zoom-in.directive';

export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    CachingService,
    ZoomInDirective

  ]
};
