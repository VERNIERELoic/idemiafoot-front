import { compileDeclareFactoryFunction } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  constructor(private authService: AuthService,
    private router: Router,
    private notificationService: NzNotificationService) { }
  form!: FormGroup;
  email: string | undefined;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
    });
  }

  async forgot() {
    const emailControl = this.form.get('email');
    if (emailControl) {
      const email = emailControl.value;
      await firstValueFrom(this.authService.forgot(email)).then(() => {
        this.router.navigate(['']);
        this.notificationService.success("Success", "Reset email sent successfully.");
      }).catch(() => {
        this.notificationService.error("Error", "Error sending reset email !");
      });
    } else {
      console.log('emailControl is null or undefined');
    }
  }

}
