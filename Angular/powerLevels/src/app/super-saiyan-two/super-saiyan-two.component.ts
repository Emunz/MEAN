import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css']
})
export class SuperSaiyanTwoComponent implements OnInit {
  @Input() sentPower
  
  power = 0

  ngOnChanges(){
    this.power = this.sentPower * 150
  }
  
  constructor() { }

  ngOnInit() {
  }

}
