import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<Array<object>> {
    return this.http.get<Array<object>>(`${environment.API_ENDPOINT}/users?per_page=100`);
  }

  getUser(username: string): Observable<object> {
    return this.http.get<object>(`${environment.API_ENDPOINT}/users/${username}`);
  }

  getRepos(username: string): Observable<Array<object>> {
    return this.http.get<Array<object>>(`${environment.API_ENDPOINT}/users/${username}/repos`);
  }

  searchUser(username: string): Observable<Array<object>> {
    return this.http.get<Array<object>>(`${environment.API_ENDPOINT}/search/users?q=${username}`);
  }
}
