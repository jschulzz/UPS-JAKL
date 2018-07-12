import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from '../app/app-material/app-material.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularSignaturePadModule } from '../../node_modules/angular-signature-pad/angular-signature-pad/angular-signature-pad.es5.js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { SignatureDialogComponent } from './signature-dialog/signature-dialog.component';

@NgModule({
  entryComponents: [SignatureDialogComponent],
  declarations: [AppComponent, InventoryTableComponent, SignatureDialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppMaterialModule,
    MDBBootstrapModule.forRoot(),
    AngularSignaturePadModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
