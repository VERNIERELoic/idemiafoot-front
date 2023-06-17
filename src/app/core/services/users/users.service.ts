import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router: Router) { }

  addUser(user: any): any {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  updateUser(id: number, user: any): any {
    return this.http.put(`${environment.apiUrl}/users/update/${id}`, user);
  }

  removeUser(user: any): any {
    return this.http.delete(`${environment.apiUrl}/users/remove/${user.id}`);
  }

  findByUsername(username: string): any {
    const body = { username };
    return this.http.post(`${environment.apiUrl}/users/findByUsername`, body);
  }
}
