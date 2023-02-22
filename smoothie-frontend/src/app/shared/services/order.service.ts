import { Injectable } from '@angular/core';
import { Smoothie } from '../models/smoothie';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { environment } from 'src/enviroments/enviroment';
import { Order } from '../models/order';

export interface CreateOrderRequest {
  customerName: string;
  customerPhoneNumber: string;
  items: OrderItem[];
}

export interface OrderItem {
  smoothieId: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  saveOrder(request: CreateOrderRequest): Observable<Order> {
    return this.httpClient.post<Order>(`${this.baseUrl}/orders`, request).pipe(catchError(this.handleError));
  }

  getOrder(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.baseUrl}/orders/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
