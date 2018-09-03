import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RandomUserProvider {
  users: any;

  constructor(public http: HttpClient) {
    console.log('Hello RandomUserProvider Provider');
  }

  loadRandomUsers(){
    return this.http.get('https://randomuser.me/api/?results=10')
    .subscribe(data =>{
      this.users = data;
      console.log(data);
    });
  }

}
