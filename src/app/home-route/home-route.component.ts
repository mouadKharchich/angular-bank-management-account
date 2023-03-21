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
   allAmountCustomers:number[]=[];
   customersLastName:string[]=[];

   constructor(private customerService:CustomerService){

   }
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      //customers number
      this.customersNumber=customers.length;
    
      //table of amount all customers
      this.allAmountCustomers=customers.map((customer)=>{
        return +customer.amount;
      });
      //console.log("table amount",this.allAmountCustomers);

      this.customersLastName=customers.map((customer)=>{
        return customer.lastName;
      })

      //console.log("table lastnames",this.customersLastName)
      //total amount of all customers
      this.totalAmount=this.allAmountCustomers.reduce((prev,current)=>prev+current,0);

      //console.log(this.customersLastName)


    });



  }



}
