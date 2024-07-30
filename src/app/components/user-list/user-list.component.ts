import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Ipage } from '../../interfaces/Ipage';
import { UserCardComponent } from '../user-card/user-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,UserCardComponent,RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  usersPage1:any= {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data:[],
    support: {}
  }
  pagesArray:number[]=[]

  constructor(private userService:UserService) {

  }
  ngOnInit(): void {
    this.userService.getUsersPagination(1).subscribe({
      next:(value)=>{

        this.usersPage1=value
        console.log(this.usersPage1);
        for(let i= 1;i<=this.usersPage1.total_pages;i++)
          {
            console.log(i);

            this.pagesArray.push(i);
          }

      }
    })
  }



}
