import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url = 'http://localhost:1400/auth'

  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post(this.base_url + '/register', user);
  }
}
