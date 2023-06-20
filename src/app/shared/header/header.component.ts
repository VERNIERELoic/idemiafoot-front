import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { firstValueFrom, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: Observable<boolean>;
  currentUser: any;
  username: any;
  isAdmin: boolean | undefined;

  constructor(public authService: AuthService, public router: Router, public notificationService: NzNotificationService) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  async ngOnInit() {
    if(this.authService.getToken()){
      this.currentUser = await firstValueFrom(this.authService.current())
      this.isAdmin = this.currentUser.isAdmin;
      this.username = this.currentUser.username;
    }
  }

  async logout() {
    this.authService.logout()
    this.router.navigate(['/']);
    this.notificationService.success("Success", "Logged out");
  }
}
