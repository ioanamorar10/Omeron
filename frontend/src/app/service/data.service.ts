import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router'
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(data: any) {
    return this.http.post(environment.apiUrl + '/api/register/', data);
  }

  login(data: any) {
    return this.http.post(environment.apiUrl + '/api/login/', data);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getUsers() {
    return this.http.get<User[]>(environment.apiUrl + '/api/users');
  }

  getUserById(id: any) {
    return this.http.get<User>(environment.apiUrl + `/api/user/${id}`);
  }

  update(id: any, data: any) {
    return this.http.put(environment.apiUrl + `/api/updateUser/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete(environment.apiUrl + `/api/deleteUser/${id}`);
  }
}
