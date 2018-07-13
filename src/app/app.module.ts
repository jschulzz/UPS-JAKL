import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from '../app/app-material/app-material.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularSignaturePadModule } from '../../node_modules/angular-signature-pad/angular-signature-pad/angular-signature-pad.es5.js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { WorkRequestBoxComponent } from './work-request-box/work-request-box.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserDeckComponent } from './user-deck/user-deck.component';
import { VehicleTableComponent } from './vehicle-table/vehicle-table.component';
import { PreCheckListComponent } from './pre-check-list/pre-check-list.component';
import { PastRequestsComponent } from './past-requests/past-requests.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { SignatureDialogComponent } from './signature-dialog/signature-dialog.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { VehicleHistoryComponent } from './vehicle-history/vehicle-history.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserList2Component } from './user-list2/user-list2.component';

@NgModule({
  entryComponents: [SignatureDialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    AngularSignaturePadModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponentComponent,
    UserDashboardComponent,
    MaintenanceComponent,
    WorkRequestBoxComponent,
    PastRequestsComponent,
    InventoryTableComponent,
    SignatureDialogComponent,
    SidenavComponent,
    UserDeckComponent,
    VehicleTableComponent,
    PreCheckListComponent,
    VehicleHistoryComponent,
    UserListComponent,
    UserList2Component
    ManagerViewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
