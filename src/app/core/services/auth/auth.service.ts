import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators'
import { BehaviorSubject, Observable, throwError, shareReplay, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  currentUser: Subject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router) { }

  current() {
    return this.http.get(`${environment.apiUrl}/users/current`).pipe(shareReplay(), tap((user: any) => { this.currentUser.next(user);}))
  }

  login(credentials: any): any {
    return this.http.post(`${environment.apiUrl}/auth/login`, credentials).pipe(
      map((res: any) => {
        localStorage.setItem('token', res.access_token);
        this.isLoginSubject.next(true);
      }),
      catchError(this.formatErrors)
    );
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }


  async getStatus() {
    if (this.getToken()) {
      return
    } else {
      this.logout();
      return false;
    }
  }

  private formatErrors(error: any) {
    return throwError(() => error.error);
  }

  logout() {
    this.destroyToken();
    this.isLoginSubject.next(false);
    this.router.navigate(['/login']);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  destroyToken() {
    localStorage.removeItem("token");
  }

  get currentUserValue() {
    return this.currentUser;
  }
}