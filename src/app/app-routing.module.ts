import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkRequestBoxComponent } from './work-request-box/work-request-box.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { PreCheckListComponent } from './pre-check-list/pre-check-list.component';

const routes: Routes = [
  { path: 'inventory', component: InventoryTableComponent },
  { path: 'maintenence', component: WorkRequestBoxComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin', redirectTo: 'inventory', pathMatch: 'full' },
  { path: 'user', component: UserDashboardComponent },
  { path: 'manager', component: ManagerViewComponent },
  { path: 'pre-check', component: PreCheckListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
