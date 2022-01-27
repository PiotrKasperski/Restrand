import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatGridListModule} from "@angular/material/grid-list";
import {RestaurantsModule} from "./restaurants/restaurants.module";
import {HttpClientModule} from "@angular/common/http";
import {UsersModule} from "./users/users.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    RestaurantsModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
