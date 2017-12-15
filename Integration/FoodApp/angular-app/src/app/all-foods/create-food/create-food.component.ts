import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../../user.service'
import { FoodService } from '../../food.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {

  constructor(private _userservice: UserService, private _foodservice: FoodService, private _router: Router) { }

  food = {
    dishName: '',
    description: '',
    ingredients: '',
    country: ''
  }

  submitCreateForm(){
    this._foodservice.createFood(this.food)
      .then(response => {this._foodservice.retrieveAllFood()})
      .then(response => {
        return this._router.navigateByUrl('/allfoods')
      })
      .catch(err => console.log(err))
  }

  ngOnInit() {
  }

}
