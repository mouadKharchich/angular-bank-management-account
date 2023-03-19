import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CostumerInfoComponent } from './costumer-info/costumer-info.component';
import { CustomerRouteComponent } from './customer-route/customer-route.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
   path:'',
   component:HomeRouteComponent
  },
  {
    path:'customer',
    component:CustomerRouteComponent
  },
  {
    path:'addCustomer',
    component:AddCustomerComponent
  },
  {
    path:'details/:id',
    component:CostumerInfoComponent
  },
  {
    path:'edit/:id',
    component:EditCustomerComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  },{
    path:'not-found',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
