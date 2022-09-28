import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
productList:any
categoryList:any
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.viewAllProduct()
    .subscribe((data)=>{
      this.productList=data
    })
  }

categorySearch(category:any){
  this.categoryList =  this.productList.filter((item:any)=>{
   if(category==''|| category==item.categoryId){
       return item
   }
    })
}

}
