import { Component, inject, input, OnInit, signal } from '@angular/core';
import { UserService } from '../../app/services/user.service';
import { UserListComponent } from '../../app/components/user-list/user-list.component';
import { DataShareService } from '../../app/services/data-share.service';
import { Ipage } from '../../app/interfaces/Ipage';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserListComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService,private dataShareService:DataShareService,private route:ActivatedRoute) {}
  searchTerm:number=0;
  hideSearch=this.dataShareService.hideSearch
  loader:boolean=false

  ngOnInit(): void {

  }
  search(event:any){

    this.searchTerm=event.target.value;
    if(Number(this.searchTerm)==0){
      this.loader=true
      this.userService.getUsersPagination(1).subscribe({
        next:(value:any)=>{
          this.dataShareService.setUsersPage(value as Ipage)
          this.dataShareService.pagesArray.set([])
          for(let i= 1;i<=this.dataShareService.usersPage().total_pages;i++)
            {
              this.dataShareService.pagesArray.set([...this.dataShareService.pagesArray(),i]);
            }
          console.log(this.dataShareService.pagesArray());
          this.loader=false
        },
        error:(err) =>{

        },
      })
    }
    else{
      this.loader=true
      this.userService.getUser(Number(this.searchTerm)).subscribe({
        next:(value:any)=>{
          console.log(value);
          let array=[value.data]
          let page ={data:array,total_pages:1,total:1,page:1} as Ipage
          this.dataShareService.setUsersPage(page)
          this.dataShareService.pagesArray.set([1])
          console.log(this.dataShareService.pagesArray());
          this.loader=false
        },
        error:(err)=> {
          this.dataShareService.usersPage().data=[]

        },
      })
    }
  }
}
