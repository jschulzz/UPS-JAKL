import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkRequestBoxComponent } from './work-request-box/work-request-box.component';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
  // { path: '', component: InventoryTableComponent },
  { path: 'maintenence', component: WorkRequestBoxComponent },
  { path: 'login', component: LoginComponentComponent }
  // { path: '', component: SidenavComponent },
  // { path: 'maintenence', component: SidenavComponent },
  // { path: 'login', component: SidenavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
