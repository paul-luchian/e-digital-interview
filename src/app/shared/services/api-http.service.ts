import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  baseUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = environment.apiUrl;
  }

  get<T>(url: string): Observable<T>;
  get<T>(url: string, options: any): Observable<HttpEvent<T>>;
  get<T>(url: string, options?: any): Observable<T> | Observable<HttpEvent<T>> {
    if (options) {
      return this.http.get<T>(`${this.baseUrl}${url}`, options);
    }
    return this.http.get<T>(`${this.baseUrl}${url}`);
  }

  put<T>(url: string, data: any): Observable<T>;
  put<T>(url: string, data: any, options: any): Observable<HttpEvent<T>>;
  put<T>(url: string, data: any, options?: any): Observable<T> | Observable<HttpEvent<T>> {
    return this.http.put<T>(`${this.baseUrl}${url}`, data, options);
  }

  post<T>(url: string, data: any): Observable<T>;
  post<T>(url: string, data: any, options: any): Observable<HttpEvent<T>>;
  post<T>(url: string, data: any, options?: any): Observable<T> | Observable<HttpEvent<T>> {
    return this.http.post<T>(`${this.baseUrl}${url}`, data, options);
  }

  delete<T>(url: string): Observable<T>;
  delete<T>(url: string, options: any): Observable<HttpEvent<T>>;
  delete<T>(url: string, options?: any): Observable<T> | Observable<HttpEvent<T>> {
    return this.http.delete<T>(`${this.baseUrl}${url}`, options);
  }

}
