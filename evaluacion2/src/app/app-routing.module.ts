import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { ContactoComponent } from './screens/contacto/contacto.component';
import { ProductsRopaComponent } from './screens/products/products-ropa/products-ropa.component';
import { ProductsZapateriaComponent } from './screens/products/products-zapateria/products-zapateria.component';
import { RegisterComponent } from './screens/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarjetaComponent } from './screens/tarjeta/tarjeta.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contacto', component: ContactoComponent },
 
  { path: 'productoropa', component: ProductsRopaComponent },
  { path: 'zapateria', component: ProductsZapateriaComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'tarjeta', component: TarjetaComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'home', component: HomeComponent},


  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
