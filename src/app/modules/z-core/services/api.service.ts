import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, id?: number): Observable<T> {
    let api_url = `${this.baseUrl}/${url}${id ? `/${id}` : ''}`;
    return this.httpClient.get<T>(api_url);
  }

  post(url: string, body: any) {
    let api_url = `${this.baseUrl}/${url}`;
    return this.httpClient.post(api_url, body);
  }

  put(url: string, body: any, id?: any) {
    let api_url = `${this.baseUrl}/${url}${id ? `/${id}` : ''}`;
    return this.httpClient.put(api_url, body);
  }

  delete(url: string, id: any) {
    let api_url = `${this.baseUrl}/${url}${id ? `/${id}` : ''}`;
    return this.httpClient.delete(api_url);
  }
}
