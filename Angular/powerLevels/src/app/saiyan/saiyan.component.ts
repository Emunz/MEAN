import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {
  @Input() sentPower

  power = 0

  ngOnChanges(){
    this.power = this.sentPower *10;
  }

  constructor() { }

  ngOnInit() {
  }

}
