import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from '../app/app-material/app-material.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularSignaturePadModule } from '../../node_modules/angular-signature-pad/angular-signature-pad/angular-signature-pad.es5.js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { WorkRequestBoxComponent } from './work-request-box/work-request-box.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from './/app-routing.module';
import { PastRequestsComponent } from './past-requests/past-requests.component';

@NgModule({
  entryComponents: [SignatureDialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppMaterialModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularSignaturePadModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponentComponent,
    UserDashboardComponent,
    MaintenanceComponent,
    WorkRequestBoxComponent,
    PastRequestsComponent
    InventoryTableComponent,
    SignatureDialogComponent
    SidenavComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
