import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { WorldOfHempComponent } from './components/pages/world-of-hemp/world-of-hemp.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to 
  { path: "home", component: HomeComponent },
  {path: "contact-us" ,component:ContactUsComponent},
  {path: "products" ,component:ProductsComponent},
  {path: "world-of-hemp" ,component:WorldOfHempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
