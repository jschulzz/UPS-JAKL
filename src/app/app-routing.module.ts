import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkRequestBoxComponent } from './work-request-box/work-request-box.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';

const routes: Routes = [
  { path: 'inventory', component: InventoryTableComponent },
  { path: 'maintenence', component: WorkRequestBoxComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
  // { path: '', component: SidenavComponent },
  // { path: 'maintenence', component: SidenavComponent },
  // { path: 'login', component: SidenavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
