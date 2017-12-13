import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';
import { User } from '../user'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {

  user = new User()
  errormessage = ""
  loggedUser = {}

  constructor(private _dataservice: DataService, private _router: Router) { }

  submitRegistration(){
    this._dataservice.registerUser(this.user)
      .then(response => this.loggedUser = response)
      .catch(err => this.errormessage = err.error)
    console.log(this.errormessage)
    // return this._router.navigateByUrl('/dashboard')
  }

  submitLogin(){
    this._dataservice.loginUser(this.user)
      .then(response => this.loggedUser = response)
      .catch(err => this.errormessage = err.error)
    // return this._router.navigateByUrl('/dashboard')
  }

  ngOnInit() {
  }

}
