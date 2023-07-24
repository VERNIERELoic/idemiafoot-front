import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UsersService } from '../../core/services/users/users.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Data } from '@angular/router';


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
  nzMessageService: any;
  listOfCurrentPageData: readonly Data[] = [];
  pageSize: number | undefined;
  inputValueMail: string | null = null;
  textValue: string | null = null;

  constructor(private usersService: UsersService, private notificationService: NzNotificationService) {
  };

  async ngOnInit(): Promise<void> {
    try {
      const users = await firstValueFrom(this.usersService.findAll()) as any[];
      this.users = users;
      this.filteredUsers = users;
    } catch (err) {
      console.error(err);
    }
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
  
    // Reset listOfCurrentPageData
    this.listOfCurrentPageData = this.filteredUsers.slice(0, this.pageSize);
  }

  async refreshUsers(){
    this.users = await firstValueFrom(this.usersService.findAll());
    this.filteredUsers = this.users;
  }
  

  async removeUser(id: any) {
    await firstValueFrom(this.usersService.removeUser(id))
      .then(() => {
        this.refreshUsers();
        this.notificationService.success("Succes", "User deleted successfully");
      }).catch((error) => {
        this.notificationService.error("Error", error.message);
      });
  }

  async handleRemoveUser(id: any) {
    try {
      await this.removeUser(id);
      await this.refreshUsers();
    } catch (error) {
      console.error(error);
    }
  }
  
  async switchAdmin(adminValue: any, userId: any) {
    if (adminValue) {
      await firstValueFrom(this.usersService.addAdmin(userId));
    } else {
      await firstValueFrom(this.usersService.removeAdmin(userId));
    }
    await this.refreshUsers();
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }

  cancelDelete(): void {
    this.nzMessageService.info('Cancel');
  }


  async confirmDelete(id: any): Promise<void> {
    this.handleRemoveUser(id);
  }

  sendMail(){
    
  }

}
