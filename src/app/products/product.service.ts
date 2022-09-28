import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViewProductComponent } from './view-product/view-product.component';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
 

  constructor(private http:HttpClient) { }
  // view all product api
viewAllProduct(){
  return this.http.get('http://localhost:3000/products')
}

viewProduct(productId:any){
  return this.http.get('http://localhost:3000/products/'+productId )
}

addProduct(productBody:any){
  return this.http.post('http://localhost:3000/products/',productBody)
}

updateProduct(productId:any,productBody:any){
  return this.http.put('http://localhost:3000/products/'+productId,productBody)
}

deleteProduct(productId:any){
  return this.http.delete('http://localhost:3000/products/'+productId )
}






}