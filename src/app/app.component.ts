import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  // providers:[{provide:HTTP_INTERCEPTORS, useClass: cacheInterceptorInterceptor,multi:true}]
})
export class AppComponent {
  title = 'AngularTask';
}
