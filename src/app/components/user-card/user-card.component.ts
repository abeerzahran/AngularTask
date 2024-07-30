import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user:IUser={
    id:0,
    first_name:"",
    last_name:"",
    email:"",
    avatar:""
  }

}
