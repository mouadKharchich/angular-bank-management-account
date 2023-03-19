import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../modules/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  customerForm: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router
    ){

      this.customerForm = this.formBuilder.group({
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

    getControl(controlName: string) {
      return this.customerForm.get(controlName);
    }
   
    submit() {
      this.isLoading = true;
        this.customerService
        .createCustomer(this.customerForm.value)
        .subscribe((customer:Customer)=>{
          this.isLoading=false;
          this.customerForm.reset();
          this.router.navigate(['/customer']);
        })

        console.log(this.customerForm.value)
    }


}
