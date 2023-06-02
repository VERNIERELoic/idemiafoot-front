import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient, private router: Router) { }

  createEvent(event: any): any {
    return this.http.post(`${environment.apiUrl}/events/createEvent`, event);
  }

  getAll(): any {
    return this.http.get(`${environment.apiUrl}/events`);
  }

  removeEvent(id: any): any {
    return this.http.delete(`${environment.apiUrl}/events/remove/${id}`);
  }

  addPlayerToEvent(eventId: any, userId: any): any {
    const body = { userId, eventId };
    return this.http.post(`${environment.apiUrl}/user-event/addUserToEvent`, body);
  }

  deleteUserFromEvent(eventId: any, userId: any): any {
    const body = { userId, eventId };
    return this.http.post(`${environment.apiUrl}/user-event/deleteUserFromEvent`, body);
  }

  getEventPlayers(id: any): any {
    return this.http.get(`${environment.apiUrl}/user-event/getUsersByEventId/${id}`);
  }

}
