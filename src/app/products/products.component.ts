import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products: any = [];


  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: "Electronics"
      },
      {
        id: 2,
        name: "House Hold Needs"
      },{
        id: 3,
        name: "Electricals"
      }
  ]
  }

}
