import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CategoryModel } from '../categoryModel';
import { OnlineShoppingService } from '../onlineShopping.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  category: CategoryModel = new CategoryModel();
  constructor(private onlineShoppingService: OnlineShoppingService ,
    private router: Router,private cookieService:CookieService) { }

    ngOnInit(): void {
      if(this.cookieService.get('role')!='admin')
      {
        this.router.navigate(['/']);
      }
    }
    onPressed() {
   
      this.save();    
    }
    save() {
 
   


      this.onlineShoppingService.addCategory(this.category)
        .subscribe(data => 
  {
    console.log(data);
    
  }        
          , error=> {
          this.router.navigate(['/errorPage']);
        } );
      this.category = new CategoryModel();
      
    }
}
