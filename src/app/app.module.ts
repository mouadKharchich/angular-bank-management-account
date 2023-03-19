import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerRouteComponent } from './customer-route/customer-route.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { CostumerInfoComponent } from './costumer-info/costumer-info.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CardStatisticComponent } from './card-statistic/card-statistic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CustomerRouteComponent,
    HomeRouteComponent,
    CostumerInfoComponent,
    AddCustomerComponent,
    CardStatisticComponent,
    NotFoundComponent,
    EditCustomerComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
