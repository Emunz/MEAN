import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  betaNumbers: Array<number> = []

  constructor(private _dataservice: DataService) { }

  pushNumber() {
    var num = Math.floor(Math.random()*10) + 1
    this._dataservice.addBetaNumber(num);
  }

  ngOnInit() {
    this.betaNumbers = this._dataservice.retrieveBetaNumbers();
  }

}
