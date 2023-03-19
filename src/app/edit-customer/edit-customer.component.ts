import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Customer } from '../modules/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerForm: FormGroup;
  isLoading = false;
  id:number=-1;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private activeRoute: ActivatedRoute,
    private router: Router
    ){

      this.customerForm = this.formBuilder.group({
        id:[
            '',
            [
              Validators.required,
            ]
        ],
        firstName:[
          '',
          [
            Validators.required,
          ]
        ], 
        lastName:[
          '',
          [
            Validators.required,
          ]
        ],
        email:[
          '',
          [
            Validators.required,
          ]
        ],
        address:[
          '',
          [
            Validators.required,
          ]
        ],
        gender:[
          'male',
          [
            Validators.required,
          ]
        ],
        phoneNumber:[
          '',
          [
            Validators.required,
          ]
        ],
        typeBank:[
          'checking',
          [
            Validators.required,
          ]
        ],
        amount:[
          0,
          [
            Validators.required,
          ]
        ],
      });
    }
  ngOnInit(): void {
    this.activeRoute.params
    .pipe(switchMap((params)=> this.customerService.getById(params['id'])))
    .subscribe({
      next:(customer) => {
       //delete customer?.id;
       this.customerForm.setValue(customer);
       console.log("get value:",customer);
       console.log('form value:',this.customerForm.value);
      },
      error:()=>{
        this.router.navigate(['/not-found'])
      }
    });
  }

    getControl(controlName: string) {
      return this.customerForm.get(controlName);
    }
   
    submit() {
      this.isLoading = true;
        this.customerService
        .updateCustomer(this.customerForm.value)
        .subscribe((customer:Customer)=>{
          this.isLoading=false;
          this.customerForm.reset();
          this.router.navigate(['/customer']);
        })

        console.log(this.customerForm.value)
    }
}
 