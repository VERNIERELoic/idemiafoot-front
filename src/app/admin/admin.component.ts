import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UsersService } from '../core/services/users/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  isVisible = false;
  users: any[] = [];
  searchText: any;

  constructor(private usersService: UsersService) {

  };

  async ngOnInit(): Promise<void> {
  }

  async checkSelectedUser(user: any) {
    var admin: any = await firstValueFrom(this.usersService.getUserById(user.id));
    if (admin.admin) {
      console.log("if ok");
      await firstValueFrom(this.usersService.removeAdmin(user.id));
    } else {
      console.log("else ok");
      await firstValueFrom(this.usersService.addAdmin(user.id));
    }
  }

  async removeUser(user: { id: any; }) {
    await firstValueFrom(this.usersService.removeUser(user.id));
  }

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }

  select(date: Date): Date {
    return date;
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
