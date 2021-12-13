import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import {NavbarComponent} from  './components/navbar/navbar.component'
import { ContactoComponent } from './screens/contacto/contacto.component';
import { ProductsRopaComponent } from './screens/products/products-ropa/products-ropa.component';
import { ProductsZapateriaComponent } from './screens/products/products-zapateria/products-zapateria.component';
import { RegisterComponent } from './screens/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TarjetaComponent } from './screens/tarjeta/tarjeta.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HomeComponent } from './home/home.component';
import { DireccionComponent } from './direccion/direccion.component';


@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    NavbarComponent,
    ContactoComponent,
    ProductsRopaComponent,
    ProductsZapateriaComponent,
    RegisterComponent,
    FooterComponent,
    FilterPipe,
    TarjetaComponent,
    CarritoComponent,
    HomeComponent,
    DireccionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
