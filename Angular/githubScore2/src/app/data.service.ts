import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
  
@Injectable()
export class DataService {

  constructor(private http: Http) { }
  
    getUser(username: string) {
      var user = this.http.get(`https://api.github.com/users/${ username }`) 
      .map(response => response.json()).toPromise();
      username = ''
      return user
    }
}