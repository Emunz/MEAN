import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  buttonArr: Array<any> = [
    {position: "Off", green: false},
    {position: "Off", green: false},
    {position: "Off", green: false},
    {position: "Off", green: false},
    {position: "Off", green: false},
    {position: "Off", green: false},
    {position: "Off", green: false},
    {position: "Off", green: false},
  ]

  changeSwitch(i) {
    let button = this.buttonArr[i]
    if(button.position === 'Off' ) {
      button.position = 'On'
      button.green = true
    } else {
      button.position = "Off"
      button.green = false
    }
  }
}
