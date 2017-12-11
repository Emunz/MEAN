import { Component, OnInit } from '@angular/core'
import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  product = {
    title: '',
    price: '',
    imgsrc: ''
  }

  index = ''

  constructor(private _dataservice: DataService, private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe( params => {
      this.product = this._dataservice.findProduct(params.get('index'))
      this.index = params.get('index')
    })
  }

  onSubmit(){
    this._dataservice.updateProduct(this.index, this.product)
    this.product = {
      title: '',
      price: '',
      imgsrc: ''
    }
  }

  ngOnInit() {
  }

}
