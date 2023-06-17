import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { finalize, firstValueFrom, tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UsersService } from 'src/app/core/services/users/users.service';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {


  validateForm!: FormGroup;
  currentUser: any;

  constructor(private notificationService: NzNotificationService, private modal: NzModalService, private fb: FormBuilder, private authService: AuthService, private userService: UsersService, private router: Router) { }

  async ngOnInit() {
    this.currentUser = await firstValueFrom(this.authService.current())
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, []],
      checkPassword: [null, [this.confirmationValidator]],
      phone: [null, [Validators.required]],
    });
    this.currentUser = await firstValueFrom(this.authService.current())
  }

  async update() {
    const user: any = await this.userService.updateUser(this.currentUser.id, this.validateForm.value)
      .toPromise()
      .then(() => {
        this.router.navigate(['profile'])
        this.notificationService.success("Succes", "Profile updated successfully");
      }).catch(() => {
        this.notificationService.error("Error", "Profile update failed");
      });
      
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
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

  fileList: NzUploadFile[] = [
  ];

  previewImage: string | undefined = '';
  previewVisible = false;

  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file['preview']) {
      file['preview'] = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;
  };


  showConfirm(): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete these items?</i>',
      nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => console.log('OK')
    });
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure you want to delete your account?',
      nzContent: '<b style="color: red;">This action cannot be undone.</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.userService.removeUser(this.currentUser)
          .pipe(
            tap((response: { status: number; }) => {
              if (response.status === 200) {
              }
            }),
            finalize(() => {
              this.notificationService.success("Success", "Account deleted");
              this.authService.logout();
              this.router.navigate(['']);
            })
          )
          .subscribe(
            () => {},
            (error: any) => {
              this.notificationService.error("Error", error.message);
              console.log(error);
            }
          );
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}