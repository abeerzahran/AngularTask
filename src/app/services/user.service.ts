import { environment } from './../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsersPagination(pageNum:number):Observable<object>{
    return this.http.get(environment.apiURL+"users?page="+pageNum);
  }
  getUser(id:number):Observable<object>{
    return this.http.get(environment.apiURL+"users/"+id);
  }

}
