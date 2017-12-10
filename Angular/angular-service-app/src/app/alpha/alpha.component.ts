import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  alphaNumbers: Array<number> = []

  constructor(private _dataservice: DataService) { }

  pushNumber() {
    var num = Math.floor(Math.random()*10)
    this._dataservice.addAlphaNumber(num);
  }

  ngOnInit() {
    this.alphaNumbers = this._dataservice.retrieveAlphaNumbers();
  }

}
