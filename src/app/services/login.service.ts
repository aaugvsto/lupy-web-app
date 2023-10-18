import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public apiUrl: string = `${environment.apiURL}User/`

  constructor(private http: HttpClient, private router: Router) { }

  public login(login: string, password: string) {
    return this.http.get<String>(
      `${this.apiUrl}Authenticate?email=${login}&password=${password}`,
    )
  }
}
