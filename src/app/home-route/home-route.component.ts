import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.css']
})
export class HomeRouteComponent implements OnInit {
   customersNumber:number=0;
   totalAmount:number=0;

   constructor(private customerService:CustomerService){

   }
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customersNumber=customers.length;
      this.totalAmount=customers.map((customer)=>{
        return +customer.amount;
      }).reduce((prev,current)=>prev+current,0);

    });
  }


}
