import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  colors = []
  
  randomColor(){
    var letters: String = '0123456789ABCDEF';
    var color: String = '#';
      for(var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
    
  ngOnInit() {
    for(let i = 0; i < 19; i++){
      this.colors.push(this.randomColor());
    }
  }
}
