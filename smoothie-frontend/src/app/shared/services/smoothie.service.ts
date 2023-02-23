import { Injectable } from '@angular/core';
import { Smoothie } from '../models/smoothie';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators'
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {

  baseUrl: string = environment.baseUrl;
  user: any = environment.credentials.users[0];

  constructor(private httpClient: HttpClient) { }

  getSmoothies(): Observable<Smoothie[]> {
    return this.httpClient.get<Smoothie[]>(`${this.baseUrl}/smoothies`);
  }

  deleteSmoothie(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Basic ' + window.btoa(this.user.username + ':' + this.user.password),
      })
    };

    return this.httpClient.delete<Smoothie[]>(`${this.baseUrl}/smoothies/${id}`, httpOptions);
  }

  saveSmoothie(smoothie: Smoothie): Observable<Smoothie> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Basic ' + window.btoa(this.user.username + ':' + this.user.password),
      })
    };

    return this.httpClient.post<Smoothie>(`${this.baseUrl}/smoothies`, smoothie, httpOptions).pipe(catchError(this.handleError));
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
