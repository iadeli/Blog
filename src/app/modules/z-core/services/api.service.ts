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

  post(url: string, body: any) {
    let api_url = `${this.serverUrl}${url}`;
    return this.httpClient.post(api_url, body, { headers: this.headers });
  }

  put(url: string, body: any, id?: any) {
    let api_url = `${this.serverUrl}${url}${id ? `/${id}` : ''}`;
    return this.httpClient.put(api_url, body, { headers: this.headers });
  }

  delete(url: string, id: any) {
    let api_url = `${this.serverUrl}${url}${id ? `/${id}` : ''}`;
    return this.httpClient.delete(api_url, { headers: this.headers });
  }
}
