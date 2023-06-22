import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UsersService } from '../../core/services/users/users.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  isVisible = false;
  users: any[] = [];
  searchText: any;
  inputValue?: string;
  options: string[] = [];
  filteredUsers: any[] = [];

  constructor(private usersService: UsersService) {

  };

  ngOnInit(): void {
    this.usersService.findAll().subscribe((users: any[]) => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  async checkSelectedUser(user: any) {
    var admin: any = await firstValueFrom(this.usersService.getUserById(user.id));
    if (admin.admin) {
      await firstValueFrom(this.usersService.removeAdmin(user.id));
    } else {
      await firstValueFrom(this.usersService.addAdmin(user.id));
    }
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filteredUsers = value ?
      this.users.filter(user => user.username.startsWith(value)) :
      this.users;

    this.options = this.filteredUsers.map(user => user.username);
  }

  async removeUser(user: { id: any; }) {
    await firstValueFrom(this.usersService.removeUser(user.id));
  }

  async switchAdmin(adminValue: any, userId: any) {
    if (adminValue) {
      await firstValueFrom(this.usersService.addAdmin(userId));
    }else{
      await firstValueFrom(this.usersService.removeAdmin(userId));
    }
  }

}
