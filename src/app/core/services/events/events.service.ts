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
    return this.http.post(`${environment.apiUrl}/teams/create`, body);
  }

  deleteTeam(teamId: any): any {
    const body = { teamId };
    return this.http.post(`${environment.apiUrl}/teams/delete`, body);
  }

  getTeamsByEvent(eventId: any): any {
    return this.http.get(`${environment.apiUrl}/teams/getTeamsByEvent/${eventId}`);
  }

  getFreePlayers(eventId: any): Promise<any> {
    return this.http.get(`${environment.apiUrl}/teams/getFreePlayers/${eventId}`).toPromise()
      .catch(error => {
        console.error('Error in getFreePlayers: ', error);
        throw error; // rethrow the error, so it can be caught in the component
      });
  }
  
  addPlayerToTeam(userIds: number[], teamId: any): any {
    const body = { teamId, userIds };
    return this.http.post(`${environment.apiUrl}/teams/addUserToTeam`, body);
  }

  getUsersByTeam(teamId: any): any {
    const body = { teamId };
    return this.http.post(`${environment.apiUrl}/teams/getUsersByTeam`, body);
  }
}
