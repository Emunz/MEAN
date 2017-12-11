import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  productList = []

  constructor() { }

  createProduct(product){
    this.productList.push(product)
  }

  retrieveProducts(){
    return this.productList
  }

  removeProduct(index){
    this.productList.splice(index, 1)
  }

  findProduct(index){
    return this.productList[index]
  }
}
