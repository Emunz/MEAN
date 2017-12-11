import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service'

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  tasks: any[] = [];

  newtask = {}

  constructor(private _dataservice: TaskService) { }

  onSubmit(){
    this._dataservice.addTask(this.newtask);
    this.newtask = {};
  }

  ngOnInit() {
    this._dataservice.tasks.subscribe(
      (task) => { this.tasks = task }
    )
  }

}
