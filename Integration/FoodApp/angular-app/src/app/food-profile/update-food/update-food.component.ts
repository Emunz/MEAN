import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../../user.service'
import { FoodService } from '../../food.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {

  food = {
    foodID: '',
    dishName: '',
    description: '',
    ingredients: '',
    country: ''
  }

  

  constructor(private _userservice: UserService, private _foodservice: FoodService, private _router: Router, private _route: ActivatedRoute) { }

  submitUpdateForm(){
    this._foodservice.updateFood(this.food)
      .then(response => {
        return this._router.navigateByUrl(`/allfoods`)
      })
      .catch(err => console.log(err))
  }

  ngOnInit() {
    this._route.parent.paramMap.subscribe( params => {
      this.food.foodID = params.get('id')
      console.log("UPDATE FORM IS HERE:", params.get('id'))
    })

  }

}
