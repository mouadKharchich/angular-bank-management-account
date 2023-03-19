import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../modules/customer.model';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
   
  constructor(private http: HttpClient) { }

  getCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(`${API_URL}`);
  }


  getById(id:number):Observable<Customer>{
    return this.http.get<Customer>(`${API_URL}/${id}`);
  }

  createCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(`${API_URL}`,customer);
   }
  
   deleteCustomer(id:number) {
    return this.http.delete(`${API_URL}/${id}`);
  }

  updateCustomer(customer:Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/${customer.id}`, customer);
  }

  search(q: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}?q=${q}`);
  }

  

}
