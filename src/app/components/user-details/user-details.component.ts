import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { DataShareService } from '../../services/data-share.service';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';
import { ZoomInDirective } from '../../directives/zoom-in.directive';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterLink,LoaderComponent,CommonModule,ZoomInDirective],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userService:UserService,private dataShareService:DataShareService) {}
  user:IUser={} as IUser
  userId:number=0;
  loader=this.dataShareService.loader.set(true)

  ngOnInit(): void {
    this.dataShareService.hideSearch.set(true)
    this.route.params.subscribe((params:any)=>{
      this.userId=params['id']
      this.userService.getUser(this.userId).subscribe({
        next:(value:any)=> {
          this.user=value.data as IUser
          console.log(this.user);
          this.dataShareService.loader.set(false)
        },
      })
    })


  }

}
