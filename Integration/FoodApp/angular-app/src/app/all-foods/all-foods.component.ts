import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../user.service'
import { FoodService } from '../food.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-foods',
  templateUrl: './all-foods.component.html',
  styleUrls: ['./all-foods.component.css']
})
export class AllFoodsComponent implements OnInit {

  currentUser = {}

  foodList = []

  constructor(private _userservice: UserService, private _foodservice: FoodService, private _router: Router) { 
    
  }

  showCreateForm(){
    return this._router.navigateByUrl('/allfoods/addfood')
  }

  ngOnInit() {
    this.currentUser = this._userservice.retrieveUser()

    this._foodservice.retrieveAllFood()

    this._foodservice.allFood.subscribe(
      (allFood) => {this.foodList = allFood}
    )
  }
}
