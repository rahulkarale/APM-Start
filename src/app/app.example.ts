import { Component } from '@angular/core';
import { IProduct } from "./products/products";
import { Location } from '@angular/common';
import { ProductService } from "./products/products.service";
@Component({
  selector: 'pm-example',
  templateUrl: './app.example.html',
  //styleUrls: ['./app.component.css'],
  //template:
  //'<div><h1>{{pageTitle}}</h1>'+
  //<pm-products></pm-products>'+
  //'</div>' ,
})
export class Example {
  errMessage: string;
  pageTitle = 'Angular 4';
  product:IProduct={
        "description":null,
        "imageUrl":null,
        "price":null,
        "productCode":null,
        "productId":null,
        "productName":null,
        "releaseDate":null,
        "starRating":null
  }
  submitted:boolean=false;
  constructor(private dataService: ProductService,
    private location: Location) {}
    ngOnInit() {
  }

  newProduct(): void {
    this.submitted = false;
    this.product ={
            "description":null,
            "imageUrl":null,
            "price":null,
            "productCode":null,
            "productId":null,
            "productName":null,
            "releaseDate":null,
            "starRating":null
      }
  }
  private save(): void {
    this.dataService.create(this.product).
    subscribe(product=>this.product=product,error=>this.errMessage=<any>error);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }
}