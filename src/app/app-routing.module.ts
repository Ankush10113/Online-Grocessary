import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { CartComponent } from './cart/cart.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessRegisComponent } from './success-regis/success-regis.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorSettingsComponent } from './vendor-settings/vendor-settings.component';
import { WithoutLoginShopNowComponent } from './without-login-shop-now/without-login-shop-now.component';
import { GiveAccessComponent } from './give-access/give-access.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  { path: '', component: UserDashboardComponent },
  { path: 'adminDash', component: AdminDashBoardComponent },
  { path: 'VendorDash', component: VendorDashboardComponent },
  { path: 'VendorDash/settings', component: VendorSettingsComponent },
  { path: 'userDash', component: UserDashboardComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'forgetPassword', component: ForgotpasswordComponent },
  { path: 'errorPage', component: ErrorpageComponent },
  { path: 'successRegis', component: SuccessRegisComponent },
  { path: 'withoutLogin', component:WithoutLoginShopNowComponent},
  { path: 'accessPermission',component:GiveAccessComponent},
  { path: 'checkout', component: CheckoutComponent },

 
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },

  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
