import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-private',
  templateUrl: './notes-private.component.html',
  styleUrls: ['./notes-private.component.css']
})
export class NotesPrivateComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'))
    })
  }



  ngOnInit() {
  }

}
