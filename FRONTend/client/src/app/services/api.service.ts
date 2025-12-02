import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Fix: Correct relative path to the standard environment folder
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProviders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Providers`);
  }

  addProvider(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Providers`, data);
  }

  deleteProvider(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Providers/${id}`);
  }

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ClinicServices`);
  }

  addService(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/ClinicServices`, data);
  }

  deleteService(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/ClinicServices/${id}`);
  }

  getBilledEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/BilledEvents`);
  }

  logEvent(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/BilledEvents`, data);
  }

  getTrends(start: string, end: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Analytics/trends?startDate=${start}&endDate=${end}`);
  }

  getSuggestions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Analytics/suggestions`);
  }

  getCptCodes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/CptCodes`);
  }
}