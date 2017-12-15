import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FoodService {

  allFood: BehaviorSubject<any[]> = new BehaviorSubject([])

  constructor(private _http: Http) { }

  updateList(newList){
    this.allFood.next(newList)
  }

  retrieveAllFood(){
    return this._http.get(`/api/getallfood`)
      .map(response => this.updateList(response.json()))
      .toPromise()
  }

  retrieveSingleFood(id){
    return this._http.post('/api/getsinglefood', id)
      .map(response => response.json())
      .toPromise()
  }

  createFood(food){
    return this._http.post(`/api/createfood/`, food)
    .map(response => response.json())
    .toPromise()
  }

  updateFood(foodObject){
    return this._http.post('/api/updatefood', foodObject)
      .map(response => response.json())
      .toPromise()
  }

  deleteFood(id){
    console.log("IN THE FOOD SERVICE DELE METHOD:", id)
    return this._http.post('/api/deletefood', id)
      .map(response => response.json())
      .toPromise()
  }
}
