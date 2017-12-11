import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {

  
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([])
  
  constructor(private _http: HttpClient) {
    this.retrieveTask()
   }
  
  retrieveTask() {
    this._http.get('https://5a2da065d38d3c0012a09532.mockapi.io/task').subscribe(
      (task: any []) => (this.tasks.next(task))
    )
  }

  addTask(newTask){
    this._http.post('https://5a2da065d38d3c0012a09532.mockapi.io/task', newTask).subscribe(
      (response) => {this.retrieveTask()}
    )
  }
}
