import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css']
})
export class SuperSaiyanFourComponent implements OnInit {
  @Input() sentPower
  
  power = 0

  ngOnChanges(){
    this.power = this.sentPower * 500
  }
  constructor() { }

  ngOnInit() {
  }

}
