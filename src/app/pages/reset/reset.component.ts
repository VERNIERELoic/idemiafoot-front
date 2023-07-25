import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  validateForm!: FormGroup;
  token: any;

  constructor(private fb: FormBuilder,
     private authService: AuthService,
     private userService: UsersService, 
     private route: ActivatedRoute,
     private router: Router, private notificationService: 
     NzNotificationService) { }

  async ngOnInit() {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
    this.route.queryParams
    .subscribe(params => {
      this.token = params['token'];
    });
  }

  async resetPassword() {
    const passwordControl = this.validateForm.get('password');
    if (passwordControl) {
      const password = passwordControl.value;
      await firstValueFrom(this.authService.reset(this.token, password)).then(() => {
        this.router.navigate(['/login']);
        this.notificationService.success("Success", "Password changed successfully");
      }).catch(() => {
        this.notificationService.error("Error", "Token expired or server is down");
      });
    }
  }  

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.validateForm.controls['checkPassword'].updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };


  
}
