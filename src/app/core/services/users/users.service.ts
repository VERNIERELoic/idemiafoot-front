import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  addUser(user: any): any {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  updateUser(id: number, user: any): any {
    return this.http.put(`${environment.apiUrl}/users/update/${id}`, user);
  }

  removeUser(userId: any): any {
    return this.http.delete(`${environment.apiUrl}/users/remove/${userId}`);
  }

  findByUsername(username: string): any {
    const body = { username };
    return this.http.post(`${environment.apiUrl}/users/findByUsername`, body);
  }

  findAll(): any {
    return this.http.get(`${environment.apiUrl}/users`);
  }

  getUserById(userId: any): any {
    return this.http.get(`${environment.apiUrl}/users/addAdmin/${userId}`);
  }

  addAdmin(userId: any): any {
    const body = { userId };
    return this.http.post(`${environment.apiUrl}/users/addAdmin`, body);
  }

  removeAdmin(userId: any): any {
    const body = { userId };
    return this.http.post(`${environment.apiUrl}/users/removeAdmin`, body);
  }

  upload(avatar: File, userId: any): any {
    const formData = new FormData();
    formData.append('image', avatar, avatar.name);

    return this.http.post(`${environment.apiUrl}/file-upload/${userId}/single`, formData);
  }

}
