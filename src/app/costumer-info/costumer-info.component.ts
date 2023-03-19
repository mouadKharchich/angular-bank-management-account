import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Customer } from '../modules/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-costumer-info',
  templateUrl: './costumer-info.component.html',
  styleUrls: ['./costumer-info.component.css']
})
export class CostumerInfoComponent implements OnInit{

  customer?:Customer;

  constructor(
    private customerService:CustomerService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ){}
 
  ngOnInit(): void {

    this.activeRoute.params
    .pipe(switchMap((params)=> this.customerService.getById(params['id'])))
    .subscribe({
      next:(customer) => (this.customer=customer),
      error:()=>{
        this.router.navigate(['/not-found'])
      }
    });
    
  }

  delete(id:any){
    this.customerService.deleteCustomer(id).subscribe((res)=>{
        this.router.navigate(['/customer']);
    })

  }


}
