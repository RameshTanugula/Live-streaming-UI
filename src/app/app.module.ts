import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './Login/user-login/user-login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CheckoutpageComponent } from './Checkout/checkoutpage/checkoutpage.component';
import { ChoosedomainComponent } from './Common/Domain/choosedomain/choosedomain.component';
import { OrdersummeryComponent } from './Common/ordersummery/ordersummery/ordersummery.component';
import { CheckoutreviewComponent } from './Checkout/checkoutReview/checkoutreview/checkoutreview.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SelectdomainComponent } from './Common/selectdomain/selectdomain.component';
import { HomeComponent } from './header/home/home.component';
import { PaymentComponent } from './Common/payment/payment.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { YoutubeliveComponent } from './youtubelive/youtubelive.component';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
// import {YouTubePlayerModule} from '@angular/youtube-player';
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    CheckoutpageComponent,
    ChoosedomainComponent,
    OrdersummeryComponent,
    CheckoutreviewComponent,
    CartComponent,
    HeaderComponent,
    SidemenuComponent,
    SelectdomainComponent,
    HomeComponent,
    PaymentComponent,
    ContactComponent,
    ForgotPasswordComponent,
    YoutubeliveComponent,
  ],
  imports: [
    NgxYoutubePlayerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ], 
  providers:  [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
