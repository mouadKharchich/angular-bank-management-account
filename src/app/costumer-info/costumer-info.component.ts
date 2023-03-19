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
  showModal=false;
  idDelete:number=-1;

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

  delete(){
    this.customerService.deleteCustomer(this.idDelete).subscribe((res)=>{
        this.router.navigate(['/customer']);
    })

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
