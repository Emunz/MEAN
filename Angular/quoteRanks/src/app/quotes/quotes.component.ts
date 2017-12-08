import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() sentQuote
  @Input() index
  @Output() Upvote = new EventEmitter();
  @Output() Downvote = new EventEmitter();
  @Output() Delete = new EventEmitter();

  
  quoteUpvote(){
    this.Upvote.emit(this.index)
  }
  quoteDownvote(){
    this.Downvote.emit(this.index)
  }
  quoteDelete(){
    this.Delete.emit(this.index)
  }
  constructor() { }

  ngOnInit() {
  }

}
