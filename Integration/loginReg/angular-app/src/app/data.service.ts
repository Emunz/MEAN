import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {



  constructor(private _http: Http) { }

  registerUser(user){
    return this._http.post(`/api/register`, user)
    .map(response => response.json())
    .toPromise()
  }

  loginUser(user){
    return this._http.post(`/api/login`, user)
    .map(response => response.json())
    .toPromise()
  }
}
