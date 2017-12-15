import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from './user.service';
import { FoodService } from './food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  currentUser = {}

  constructor(private _userservice: UserService, private _foodservice: FoodService, private _router: Router){
    this.currentUser = this._userservice.retrieveUser()
  }

  ngOnInit(){
    this._userservice.retrieveUser()
  }
  // MAKE THESE COMPONENTS STILL
  // CreateFood
  // SingleFood
  // DeleteFood
  // UpdateFood


}
