import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { RouterLink } from '@angular/router';
import { ZoomInDirective } from '../../directives/zoom-in.directive';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterLink,ZoomInDirective],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user:IUser={} as IUser


}
