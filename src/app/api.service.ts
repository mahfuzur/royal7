import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://bdf.erd.gov.bd/api/public';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/sessions')
  }

  getPost(slug): Observable<any> {
    return this.http.get<any>(this.apiURL + '/sessions/' + slug)
  }
}
