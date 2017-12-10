import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {

  constructor(private _dataservice: DataService) { }
  @Output() emitter = new EventEmitter();
  

  ngOnInit() {
  }

  farmGold(){
    this._dataservice.farm()
    this.emitter.emit()
  }

  caveGold(){
    this._dataservice.cave()
    this.emitter.emit()
  }

  casinoGold(){
    this._dataservice.casino()
    this.emitter.emit()
  }

  houseGold(){
    this._dataservice.house()
    this.emitter.emit()
  }

}
