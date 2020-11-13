import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './products/product-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './authguard.service';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent, canActivate : [AuthguardService]
  },
  {
    path: 'products', component: ProductsComponent, canActivate : [AuthguardService],
    children: [{
      path: 'detail/:id', component: ProductEditComponent
    }]
  },

  // {
  //     path: 'products/:id', component: ProductEditComponent
  // }
  {
    path: '', redirectTo:'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
