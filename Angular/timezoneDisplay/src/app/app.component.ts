import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  flag: Boolean = false;
  today: Date = new Date();

  onButtonClick(timezone) { 
    this.today = new Date();
    if(timezone === 'Clear'){
      this.flag = false
      return this.flag
    } else if(timezone === 'EST') {
      this.today.setHours(this.today.getHours() +1);
      this.flag = true
      return this.flag
    } else if(timezone === 'CST') {
      this.flag = true
      return this.flag
    } else if(timezone === 'MST') {
      this.today.setHours(this.today.getHours() -1);
      this.flag = true
      return this.flag
    } else if(timezone === 'PST') {
      this.today.setHours(this.today.getHours() -2);
      this.flag = true
      return this.flag
    }
  }
}
