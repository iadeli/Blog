import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private serverUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, id?: number): Observable<T> {
    let api_url = `${this.serverUrl}${url}${id ? `/${id}` : ''}`;
    return this.httpClient.get<T>(api_url, { headers: this.headers });
  }

  post<T>(url: string, body: T): Observable<T> {
    let api_url = `${this.serverUrl}${url}`;
    return this.httpClient.post<T>(api_url, body, { headers: this.headers });
  }

  put<T>(url: string, body: T, id?: any): Observable<T> {
    let api_url = `${this.serverUrl}${url}${id ? `/${id}` : ''}`;
    return this.httpClient.put<T>(api_url, body, { headers: this.headers });
  }

  delete<T>(url: string, id: any): Observable<T> {
    let api_url = `${this.serverUrl}${url}${id ? `/${id}` : ''}`;
    return this.httpClient.delete<T>(api_url, { headers: this.headers });
  }
}
