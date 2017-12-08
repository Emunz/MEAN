import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css']
})
export class SuperSaiyanThreeComponent implements OnInit {
  @Input() sentPower
  
  power = 0

  ngOnChanges(){
    this.power = this.sentPower * 250
  }
  constructor() { }

  ngOnInit() {
  }

}
