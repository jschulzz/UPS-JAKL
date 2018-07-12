import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from './/app-routing.module';
import { AngularSignaturePadModule } from '../../node_modules/angular-signature-pad/angular-signature-pad/angular-signature-pad.es5.js';

@NgModule({
  declarations: [AppComponent, SidenavComponent],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), AppRoutingModule, AngularSignaturePadModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
