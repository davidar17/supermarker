import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthService } from './_services/auth.service';
import { environment } from './../environments/environment';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShopingCardComponent } from './shoping-card/shoping-card.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';

const approutes: Routes = [
   { path: 'shoping-card', component: ShopingCardComponent },
   { path: 'products', component: ProductsComponent },
   { path: 'check-out', component: CheckOutComponent },
   { path: 'order-success', component: OrderSuccessComponent },
   { path: 'admin/orders', component: AdminOrdersComponent },
   { path: 'admin/products', component: AdminProductsComponent },
   { path: 'my-orders', component: MyOrdersComponent },
   { path: 'login', component: LoginComponent },
   { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      ShopingCardComponent,
      ProductsComponent,
      ShopingCardComponent,
      CheckOutComponent,
      OrderSuccessComponent,
      MyOrdersComponent,
      AdminOrdersComponent,
      AdminProductsComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(approutes),
      AngularFireModule.initializeApp(environment.firebaseConfig, 'da-supermarket'),
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireDatabaseModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
