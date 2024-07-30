import { CacheEntry } from './../interfaces/cacheEntry';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CachingService {

  private cache= new Map<string,CacheEntry>();
  private readonly cacheDuration = 3000000
  constructor() { }

  set(key:string,value:any){
    const expiry = Date.now()+ this.cacheDuration
    this.cache.set(key,{value,expiry})
  }

  get(key:string){
    const value = this.cache.get(key);
    if(value)
    {
      if(Date.now()> value.expiry)
      {
        this.cache.delete(key)
      }
      else{
        return value.value;
      }
    }
    return null
  }
  clear(key:string){
    this.cache.delete(key);
  }

  clearAll(){
    this.cache.clear();
  }



}
