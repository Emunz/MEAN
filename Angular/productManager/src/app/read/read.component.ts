import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  products = this._dataservice.retrieveProducts()

  constructor(private _dataservice: DataService) { }

  deleteProduct(index){
    this._dataservice.removeProduct(index)
  }
  
  ngOnInit() {
  }

}
