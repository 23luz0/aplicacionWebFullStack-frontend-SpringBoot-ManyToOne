import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';

import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductosComponent,
    ProductoFormComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
