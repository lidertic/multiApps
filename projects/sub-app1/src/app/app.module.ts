import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';
import { SharedAppModule } from 'src/app/_shared/shared.module';

// List of providers
const providers = [];

@NgModule({
  declarations: [AppComponent, View1Component, View2Component, NavComponent],
  imports: [BrowserModule, AppRoutingModule, SharedAppModule],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule {}

@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers
    };
  }
}
