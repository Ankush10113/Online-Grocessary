import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddProductModel } from '../addProductModel';
import { OnlineShoppingService } from '../onlineShopping.service';
import { ProductDetailsModel } from '../ProductDetailsModel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product: AddProductModel = new AddProductModel();
  productDetails:ProductDetailsModel=new ProductDetailsModel();
   id!:string|null;
  constructor(private onlineShoppingService:OnlineShoppingService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.paramMap.get("id"));
    this.id=this.router.snapshot.paramMap.get("id");

    this.onlineShoppingService.getOneproducts(this.id).subscribe((data:any)=>{
      console.log(data);
      this.product=data;
      
    })
  }
  onPressed()
  {
    this.onlineShoppingService.updateOneProduct(this.product).subscribe((data:any)=>{
      console.log(data);
      this.product=data;
      
    })
  }
}
