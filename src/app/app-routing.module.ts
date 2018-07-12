import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  // { path: '', component: InventoryTableComponent },
  // { path: 'maintenence', component: MaintenenceComponent },
  // { path: 'login', component: LoginComponent }
  // { path: '', component: SidenavComponent },
  // { path: 'maintenence', component: SidenavComponent },
  // { path: 'login', component: SidenavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
