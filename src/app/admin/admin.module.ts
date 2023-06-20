import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UsersService } from '../core/services/users/users.service';

@NgModule({
  declarations: [
    AdminComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NzIconModule,
    NzLayoutModule,
    NzInputModule,
    NzTabsModule,
    NzListModule,
    NzButtonModule,
    NzFormModule,
    NzTableModule,
  ], 
  providers: [
    UsersService,
  ],
})
export class AdminModule { }
