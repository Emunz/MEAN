import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  alphaNumbers: Array<number> = []

  betaNumbers: Array<number> = []


  constructor() { }

  retrieveAlphaNumbers(){
    return this.alphaNumbers;
  }

  retrieveBetaNumbers(){
    return this.betaNumbers;
  }

  addAlphaNumber(num: number) {
    this.alphaNumbers.push(num)
  }

  addBetaNumber(num: number) {
    this.betaNumbers.push(num)
  }



}
