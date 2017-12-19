import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const api_url = 'https://tidy-api-test.herokuapp.com/api/v1';

@Injectable()
export class CustomerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CustomerProvider Provider');
  } 

  getCustomerData(): Observable<any> {
    return this.http.get(`${api_url}/customer_data`)
  }

  createCustomer(data): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${api_url}/customer_data`, data)
        .subscribe((response: any) => {
          return resolve(response)
        }, (err) => reject(err))
    })
  }

  deleteCustomer(id): Observable<any> {
    return this.http.request('delete', `${api_url}/customer_data/${id}`)    
  }

  editCustomer(data, id): Observable<any> {
    return this.http.put(`${api_url}/customer_data/${id}`, data)
  }
}
