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
  showModal = false;
  idDelete:number=-1;
  
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

  delete(){
    this.customerService.deleteCustomer(this.idDelete).subscribe(() => {
      this.customers = this.customers.filter((p) => p.id !== this.idDelete);
      this.showModal = !this.showModal;  
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

  toggleModal(){
    this.showModal = !this.showModal;
  }

  saveId(id:any){
    this.showModal = !this.showModal;
    if(this.showModal){
      this.idDelete=id;
    }
  }
}
