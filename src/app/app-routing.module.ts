import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeadsComponent } from './leads/leads.component';
import { CotactsComponent } from './cotacts/cotacts.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  //path for localhost:4200/dashboard
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'', redirectTo:'dashboard', pathMatch:'full'
  },
  {
    path:'employee',component:EmployeeComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'cotacts',component:CotactsComponent
  },
  {
    path:'leads',component:LeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
