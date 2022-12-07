import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorHeaderComponent } from './vendor-header/vendor-header.component';
import { VendorFooterComponent } from './vendor-footer/vendor-footer.component';
import { VendorSettingsComponent } from './vendor-settings/vendor-settings.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

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
      UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
