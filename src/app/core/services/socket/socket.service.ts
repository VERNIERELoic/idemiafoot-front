import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SocketService {

  private socket;

  constructor(private http: HttpClient) {
    this.socket = io(environment.apiUrl);
  }

  listen(eventName: string): Observable<any> {
    return new Observable(observer => {
      this.socket.on(eventName, (data) => {
        observer.next(data);
      });
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  findAll(): any {
    return this.http.get(`${environment.apiUrl}/message`);
  }
}
