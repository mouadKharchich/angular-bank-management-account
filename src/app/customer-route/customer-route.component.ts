import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Customer } from '../modules/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-route',
  templateUrl: './customer-route.component.html',
  styleUrls: ['./customer-route.component.css']
})
export class CustomerRouteComponent implements OnInit{
  customers:Customer[]=[];
  searchQuery = '';
  searchQuerySubject = new Subject<string>();

  constructor(private customerService:CustomerService){
    this.searchQuerySubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((query: string) => {
        this.search(query);
      });
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }

  delete(id:any){
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.customers = this.customers.filter((p) => p.id !== id);
     
    });

    //console.log(id)
  }

  search(query: string) {
    this.customerService.search(query).subscribe((customers) => {
      this.customers = customers;
    });
  }

  onQuery(event: any) {
    this.searchQuerySubject.next(event.target.value);
  }

}
