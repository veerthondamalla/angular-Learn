import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id;
  constructor(private activatedRoute: ActivatedRoute) {

   }

  ngOnInit() {
   // this.id = this.activatedRoute.snapshot.params['id'];
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');
     this.activatedRoute.paramMap.subscribe(params => {
       console.log(params);
      this.id = params.get("id");
     })
  }

}
