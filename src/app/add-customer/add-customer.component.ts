import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
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
        cin:[
          '',
          [
            Validators.required,
            Validators.minLength(7)
          ],
          [this.validateCin.bind(this)],
        ],
        firstName:[
          '',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ], 
        lastName:[
          '',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ],
        email:[
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],
        address:[
          '',
          [
            Validators.required,
            Validators.minLength(3)
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
            Validators.pattern(/(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/g)
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
            Validators.min(0)
          ]
        ],
      });


    }

    getControl(controlName: string) {
      return this.customerForm.get(controlName);
    }
   
    submit() {
      if(this.customerForm.valid){
          this.isLoading = true;

          this.customerService
          .createCustomer(this.customerForm.value)
          .subscribe((customer:Customer)=>{
            this.isLoading=false;
            this.customerForm.reset(); 
            this.router.navigate(['/customer']);
          });

        //console.log(this.customerForm.value);
      }
    }

    validateCin(
      control: AbstractControl
    ): Observable<{ cinExists: boolean } | null> {
      return this.customerService.getCustomerByCin(control.value).pipe(
        map((customers: Customer[]) => {
          if (customers.length > 0) {
            return { cinExists: true };
          }
          return null;
        })
      );
    }

}
