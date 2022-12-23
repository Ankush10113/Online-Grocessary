import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorHeaderComponent } from './vendor-header/vendor-header.component';
import { VendorFooterComponent } from './vendor-footer/vendor-footer.component';
import { VendorSettingsComponent } from './vendor-settings/vendor-settings.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FormsModule } from '@angular/forms';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { SuccessRegisComponent } from './success-regis/success-regis.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { FilterPipe } from './filter.pipe';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { WithoutLoginShopNowComponent } from './without-login-shop-now/without-login-shop-now.component';
import { VendorProductsComponent } from './vendor-products/vendor-products.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashBoardComponent,
    HeaderComponent,
    FooterComponent,
 
    VendorDashboardComponent,
      VendorHeaderComponent,
      VendorFooterComponent,
      VendorSettingsComponent,
      SigninComponent,
      SignupComponent,
      ForgotpasswordComponent,
      UserDashboardComponent,
      ErrorpageComponent,
      SuccessRegisComponent,
      CartComponent,
      ProductsComponent,
      FilterPipe,
      CartHeaderComponent,
      WithoutLoginShopNowComponent,
      VendorProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
