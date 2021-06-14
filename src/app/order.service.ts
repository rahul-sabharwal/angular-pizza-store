import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl='http://localhost:8080/api/v1/order';

  focusOrder = new Subject

  constructor(private http:HttpClient) {
  }

  order():Observable<any>{
    return this.http.get(this.apiUrl)
  }

}
