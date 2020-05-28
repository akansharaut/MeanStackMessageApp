import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private http: HttpClient) { }

  base_url = 'http://localhost:1400/api';

  getMessages() {
    return this.http.get(this.base_url + '/messages');
  }

  postMessage(message) {
    return this.http.post(this.base_url + '/message', message);
  }
}
