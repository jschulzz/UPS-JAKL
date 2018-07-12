import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { AngularSignaturePadModule } from '../../node_modules/angular-signature-pad/angular-signature-pad/angular-signature-pad.es5.js';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatAccordion,
} from '@angular/material';

import { AppComponent } from './app.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
// import { SignatureDialogComponent } from './signature-dialog/signature-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryTableComponent,
    // SignatureDialogComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    MatDialogModule,
    // AngularSignaturePadModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };