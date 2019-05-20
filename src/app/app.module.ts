import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
// Sub Applications
import { App1SharedModule } from '../../projects/sub-app1/src/app/app.module';
import { App2SharedModule } from '../../projects/sub-app2/src/app/app.module';
import { NavComponent } from './nav/nav.component';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot(),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
