import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent implements OnInit {

  betaNumbers: Array<number> = []
  alphaNumbers: Array<number> = []

  difference = 0

  constructor(private _dataservice: DataService) { }
  add(a, b) {
    return a + b;
  }

  generateDifference(){
    var sum = this.alphaNumbers.reduce(this.add, 0) - this.betaNumbers.reduce(this.add, 0)
    this.difference = sum
  }


  ngOnInit() {
    this.betaNumbers = this._dataservice.retrieveBetaNumbers();
    this.alphaNumbers = this._dataservice.retrieveAlphaNumbers();
  }

}
