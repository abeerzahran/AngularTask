import { Injectable,signal } from '@angular/core';
import { Ipage } from '../interfaces/Ipage';


@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor() { }
  usersPage = signal<Ipage>({data:[],total_pages:0,total:0,page:0} as Ipage)
  pagesArray=signal<number[]>([])
  hideSearch=signal<boolean>(false)
  loader= signal<boolean>(true)

  setUsersPage(value:Ipage){
    this.usersPage.set(value)
  }
  getUsersPage(){
    return this.usersPage
  }
}
