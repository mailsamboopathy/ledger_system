import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './base/component/login/login.component';
import { RegisterComponent } from './base/component/register/register.component';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,

    HomeModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
