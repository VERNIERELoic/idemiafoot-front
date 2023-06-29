import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { playerFactory } from 'src/app/app.module';
import { LottieModule } from 'ngx-lottie';
import { FormsModule } from '@angular/forms';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    NzSpinModule,
    NzGridModule,
    LottieModule.forRoot({ player: playerFactory }),
    FormsModule,
    NzListModule,
    NzInputModule,
    NzIconModule,
    NzAvatarModule,
    NzButtonModule,
  ]
})
export class MessageModule { }
