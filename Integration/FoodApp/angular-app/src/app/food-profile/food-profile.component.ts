import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../user.service'
import { FoodService } from '../food.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-profile',
  templateUrl: './food-profile.component.html',
  styleUrls: ['./food-profile.component.css']
})
export class FoodProfileComponent implements OnInit {

  currentUser = {}

  singleFood = {}

  constructor(private _userservice: UserService, private _foodservice: FoodService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser = this._userservice.retrieveUser()

    this._route.paramMap.subscribe( params => {
      this._foodservice.retrieveSingleFood({'id': params.get('id')})
        .then(params => this.singleFood = params)
        .catch(err => console.log(err))
    })
  }
}
