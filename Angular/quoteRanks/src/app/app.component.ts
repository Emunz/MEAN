import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  quotes = [];

  quote = {
    content: '',
    author: '',
    votes: 0
  }

  onSubmit() {
    this.quotes.push(this.quote)
     console.log(this.quote)

     this.quote = {
      content: '',
      author: '',
      votes: 0
    }
  }

  upvotingQuote(event){
    console.log("upvote, index:", event)
    this.quotes[event].votes += 1
  }
  downvotingQuote(event){
    console.log("downvote, index:", event)
    this.quotes[event].votes -= 1
  }
  deletingQuote(event){
    console.log("delete, index:", event)
    this.quotes.splice(event, 1)
  }
}

