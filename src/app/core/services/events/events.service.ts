import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  createEvent(event: any): any {
    return this.http.post(`${environment.apiUrl}/events/createEvent`, event);
  }

  getAll(): any {
    return this.http.get(`${environment.apiUrl}/events`);
  }

  removeEvent(id: any): any {
    return this.http.delete(`${environment.apiUrl}/events/remove/${id}`);
  }

  getEvent(id: any): any {
    return this.http.get(`${environment.apiUrl}/events/getEvent/${id}`);
  }

  addPlayerToEvent(eventId: any, userId: any): any {
    const body = { userId, eventId };
    return this.http.post(`${environment.apiUrl}/user-event/addUserToEvent`, body);
  }

  deleteUserFromEvent(eventId: any, userId: any): any {
    const body = { userId, eventId };
    return this.http.post(`${environment.apiUrl}/user-event/deleteUserFromEvent`, body);
  }

  // getEventPlayers(id: any): any {
  //   return this.http.get(`${environment.apiUrl}/user-event/getUsersByEventId/${id}`);
  // }

  getUserEventPlayers(id: any): any {
    return this.http.get(`${environment.apiUrl}/user-event/getUserEventsByEventId/${id}`);
  }

  confirmUser(eventId: any, userId: any): any {
    const body = { userId, eventId };
    return this.http.post(`${environment.apiUrl}/user-event/confirmUser`, body);
  }

  createTeam(eventId: any): any {
    const body = { eventId };
    return this.http.post(`${environment.apiUrl}/events-teams/create`, body);
  }

  deleteTeam(teamId: any): any {
    const body = { teamId };
    return this.http.post(`${environment.apiUrl}/teams/delete`, body);
  }

  getTeamsByEvent(eventId: any): any {
    return this.http.get(`${environment.apiUrl}/events-teams/getTeamsByEvent/${eventId}`);
  }

  getFreePlayers(eventId: any): any {
    const body = { eventId };
    return this.http.post(`${environment.apiUrl}/events-teams/getFreePlayers`, body);
  }
  
  addPlayerToTeam(userIds: number[], teamId: any): any {
    const body = { teamId, userIds };
    return this.http.post(`${environment.apiUrl}/teams-users/addUserToTeam`, body);
  }

  getUsersByTeam(teamId: any): any {
    const body = { teamId };
    return this.http.post(`${environment.apiUrl}/teams/getUsersByTeam`, body);
  }
}
