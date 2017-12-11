import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product = {}

  constructor(private _dataservice: DataService, private _router: Router) { }

  onSubmit(){
    this._dataservice.createProduct(this.product)
    this.product = {}
    return this._router.navigateByUrl('/read')
  }

  

  ngOnInit() {
  }

}
