import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  allActions = []
  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this.allActions = this._dataservice.allActions
  }

}
