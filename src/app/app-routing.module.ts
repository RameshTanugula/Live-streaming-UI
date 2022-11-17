import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutpageComponent } from './Checkout/checkoutpage/checkoutpage.component';
import { CheckoutreviewComponent } from './Checkout/checkoutReview/checkoutreview/checkoutreview.component';
import { ChoosedomainComponent } from './Common/Domain/choosedomain/choosedomain.component';
import { OrdersummeryComponent } from './Common/ordersummery/ordersummery/ordersummery.component';
import { PaymentComponent } from './Common/payment/payment.component';
import { SelectdomainComponent } from './Common/selectdomain/selectdomain.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './header/home/home.component';
import { UserLoginComponent } from './Login/user-login/user-login.component';
import { YoutubeliveComponent } from './youtubelive/youtubelive.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Login', component: UserLoginComponent },
  { path: 'live', component: YoutubeliveComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Checkout', component: CheckoutpageComponent },
  { path: 'Domain', component: ChoosedomainComponent },
  { path: 'Order', component: OrdersummeryComponent },
  { path: 'CheckoutReview', component: CheckoutreviewComponent },
  { path: 'cart', component: CartComponent },
  { path: 'choosedomain', component: SelectdomainComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
