import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Ipage } from '../../interfaces/Ipage';
import { UserCardComponent } from '../user-card/user-card.component';
import { RouterLink } from '@angular/router';
import { DataShareService } from '../../services/data-share.service';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,UserCardComponent,RouterLink,LoaderComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  usersPage= this.dataShareService.getUsersPage()

  pagesArray=this.dataShareService.pagesArray
  loader=this.dataShareService.loader.set(true)

  constructor(private userService:UserService,private dataShareService:DataShareService) {

  }
  ngOnInit(): void {
    this.dataShareService.hideSearch.set(false)
    this.userService.getUsersPagination(1).subscribe({
      next:(value)=>{

        this.usersPage.set(value as Ipage)
        console.log(this.usersPage());
        this.pagesArray.set([])
        for(let i= 1;i<=this.usersPage().total_pages;i++)
          {
            this.pagesArray.set([...this.pagesArray(),i]);
          }
          this.dataShareService.loader.set(false)
      }
    })
    console.log(this.usersPage().data);

  }

  getPage(num:number){
    this.dataShareService.loader.set(true)
    this.userService.getUsersPagination(num).subscribe({
      next:(value)=> {
        this.usersPage.set(value as Ipage)
        this.dataShareService.loader.set(false)
      },
    })
  }
  prevPage(){

    if(this.usersPage().page!=1){
      this.dataShareService.loader.set(true)
      console.log(this.usersPage().page);
      this.usersPage().page--;
      this.getPage(this.usersPage().page)
    }
  }
  nextPage(){

    if(this.usersPage().page!=this.usersPage().total_pages){
      this.dataShareService.loader.set(true)
      console.log(this.usersPage().page);
      this.usersPage().page++;
      this.getPage(this.usersPage().page)
      this.dataShareService.loader.set(false)
    }
  }


}
