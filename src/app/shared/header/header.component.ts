import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { firstValueFrom, Observable, Subscription } from 'rxjs';
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
  private userSubscription?: Subscription;

  constructor(public authService: AuthService, public router: Router, public notificationService: NzNotificationService) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  ngOnInit() {
    this.userSubscription = this.authService.currentUser.subscribe(async user => {
      if (user) {
        this.username = user.username;
        this.isAdmin = user.isAdmin;
      } else {
        this.username = null;
        this.isAdmin = false;
      }
    });

    if (this.authService.getToken()) {
      this.currentUser = this.authService.current().subscribe();
    }
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }


  async logout() {
    this.authService.logout()
    this.username = null;
    this.isAdmin = false;
    this.router.navigate(['/']);
    this.notificationService.success("Success", "Logged out");
  }
}





