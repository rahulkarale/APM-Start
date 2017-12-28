import {Injectable} from '@angular/core';
import { IProduct } from "./products";
import {HttpClient,} from '@angular/common/http';
import { Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise'
import { HttpErrorResponse } from "@angular/common/http";
import {RequestOptions} from '@angular/http';

@Injectable()
export class ProductService{
    private _productUrl='/product/';
    private headers = new Headers({'Content-Type': 'application/json'});
   // headers = new Headers({ 'Content-Type': 'application/json' });
   // options = new RequestOptions({ headers: this.headers });
    products:IProduct[]=[];
    constructor(private _http:HttpClient){}
    getProducts():Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._productUrl+'findall')
        .catch(this.handleError);
    }
     getProduct(id:number):Observable<IProduct>{
        return this._http.get<IProduct>(this._productUrl+'product/'+id)
        .catch(this.handleError);
   }
   create(product:IProduct):Observable<IProduct>{
       //console.log(product);
       return this._http.post<IProduct>(this._productUrl+"post",product);
   }
    private handleError(err:HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
   
}