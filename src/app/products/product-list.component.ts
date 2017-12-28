import { Component, OnInit } from '@angular/core';
import { IProduct } from "./products";
import { ProductService } from "./products.service";

@Component({
   
    templateUrl:'./products-list.component.html',
    styleUrls:['./product-list.components.css']
})
export class ProductListComponent implements OnInit{
    pageTitle:String='Product List'
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    _listFilter: string;
    errMessage:string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products:IProduct[]=[];
    constructor(private _productService:ProductService){
        
        this._listFilter='';
    }
    toggleImage():void{
        this.showImage=!this.showImage;
    }
    ngOnInit():void {
       this._productService.getProducts()
       .subscribe(products=>{
           this.products=products;
           this.filteredProducts=this.products;
           this._productService.products=this.products;
       },error=>this.errMessage=<any>error);
        
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onRatingClicked(message:string):void{
        this.pageTitle='Product List:'+message;
    }
}