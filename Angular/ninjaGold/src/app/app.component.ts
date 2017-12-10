import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 
  gold

  updateGold(){
    this.gold = this._dataservice.retrieveGold()
  }

  constructor(private _dataservice: DataService){
  }

  ngOnInit(){
    
  }
}
