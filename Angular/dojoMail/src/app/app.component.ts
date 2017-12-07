import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  emailArray: Array<object> = [
    {
      email: "bill@gates.com",
      importance: true,
      subject: "New Windows",
      content: "Windows XI will launch in year 2020"
    },
    {
      email: "ada@locelace.com",
      importance: false,
      subject: "Programming",
      content: "Enchantress of Numbers"
    },
    {
      email: "john@carmac.com",
      importance: true,
      subject: "Updated Algo",
      content: "New algorithm for shadow volumes"
    },
    {
      email: "gabe@newel.com",
      importance: false,
      subject: "HL3!",
      content: "just kidding..."
    }
  ]
}
