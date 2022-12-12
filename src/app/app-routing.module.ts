import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorSettingsComponent } from './vendor-settings/vendor-settings.component';


const routes: Routes = [
  { path: '', component: AdminDashBoardComponent },
  { path: 'adminDash', component: AdminDashBoardComponent },
  { path: 'VendorDash', component: VendorDashboardComponent },
  { path: 'VendorDash/settings', component: VendorSettingsComponent },
  { path: 'userDash', component: UserDashboardComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'forgetPassword', component: ForgotpasswordComponent },
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
