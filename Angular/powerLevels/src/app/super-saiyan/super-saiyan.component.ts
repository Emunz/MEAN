import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css']
})
export class SuperSaiyanComponent implements OnInit {
  @Input() sentPower
  
  power = 0

  ngOnChanges(){
    this.power = this.sentPower * 90
  }

  constructor() { }

  ngOnInit() {
  }

}
