import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // component logic

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router, private notificationService: NzNotificationService) { }

  async login() {
    await firstValueFrom(this.authService.login(this.validateForm.value))
      .then(() => {
        this.router.navigate(['']);
        this.notificationService.success("Success", "Connected");
      }).catch((error) => {
        this.notificationService.error("Error", error.message);
      });
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}