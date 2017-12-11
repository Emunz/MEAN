import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  findCity(city){
    console.log(city)
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fc29215b9258b98c07811c3c8899b20`)
      .map(data => data.json())
      .toPromise()
  }

  // 9fc29215b9258b98c07811c3c8899b20
}
