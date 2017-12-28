import { Component, OnInit } from '@angular/core';
import { IProduct } from "./products";
import {ActivatedRoute} from'@angular/router';
import {Router} from '@angular/router';
import { ProductService } from "./products.service";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string='Product Detail';
  product:IProduct;
  errMessage:string;
  constructor(private _route:ActivatedRoute,
  private _router:Router,private _productService:ProductService) {

   }

  ngOnInit() {
    let id=+this._route.snapshot.paramMap.get('id');
    this.pageTitle=this.pageTitle+':'+id;
    this._productService.getProduct(id)
       .subscribe(product=>{
           this.product=product;
       },error=>this.errMessage=<any>error);
        
      
  }
  onBack():void{
    this._router.navigate(['/products']);
  }
}
