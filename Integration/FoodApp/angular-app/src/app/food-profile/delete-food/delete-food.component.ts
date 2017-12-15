import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../../user.service'
import { FoodService } from '../../food.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-food',
  templateUrl: './delete-food.component.html',
  styleUrls: ['./delete-food.component.css']
})
export class DeleteFoodComponent implements OnInit {

  
  foodID = ''


  constructor(private _userservice: UserService, private _foodservice: FoodService, private _router: Router, private _route: ActivatedRoute) { }

  clickDelete(){
    this._foodservice.deleteFood({'id': this.foodID})
      .then(params => {
        return this._router.navigateByUrl(`/allfoods`)
      })
  }

  ngOnInit() {
    this._route.parent.paramMap.subscribe( params => {
      this.foodID = params.get('id')
      console.log("DELETE IS HERE:", this.foodID)
    })
  }
}
