import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] = [];
  username: string = "";
  promise: any = null;
  score;
  scorestring = ''
  successmessage= ''
  errormessage = ''



  constructor(private _dataService: DataService) { }


  getScore() {
    console.log(this.username);
    this.promise = this._dataService.getUser(this.username); ///get promise from dataservice the way we'd get USers
    this._dataService.getUser(this.username)
      .then(user => {
        if (user.id) {
          this.score = user.public_repos + user.followers + user.following;
          this.successmessage = `${this.username} has ${user.public_repos} public repositiories, ${user.followers} followers,
          and follows ${user.following} developers.`
          this.scorestring = "Total Score: " + this.score
        }
      })
      .catch(err => this.errormessage = 'Person not found');
  }


}
