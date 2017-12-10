import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  goldCount = 0
  allActions = []

  constructor() { }

  retrieveGold(){
    return this.goldCount
  }

  farm(){
    var addedGold = Math.floor(Math.random() * (6 - 2) + 2)
    this.goldCount += addedGold
    this.allActions.push("You've earned " + addedGold + " from the Farm!")
    console.log(this.goldCount)
  }

  cave(){
    var addedGold = Math.floor(Math.random() * (11 - 5) + 5)
    this.goldCount += addedGold
    this.allActions.push("You've earned " + addedGold + " from the Cave!")
    console.log(this.goldCount)
    return this.goldCount
  }

  casino(){
    var addedGold = Math.floor(Math.random() * (101))
    var randomChange = Math.floor(Math.random() * 2)
    if(randomChange === 1){
      this.goldCount += addedGold
      this.allActions.push("You've won " + addedGold + " from the Casino!")
    } else {
      this.goldCount -= addedGold
      this.allActions.push("You've lost " + addedGold + " from the Casino!")
    }
    console.log(this.goldCount)
    return this.goldCount
  }

  house(){
    var addedGold = Math.floor(Math.random() * (16 - 7) + 7)
    this.goldCount += addedGold
    this.allActions.push("You've earned " + addedGold + " from the House!")
    console.log(this.goldCount)
    return this.goldCount
  }
  

}
