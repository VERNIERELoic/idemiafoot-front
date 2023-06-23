import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { playerFactory } from 'src/app/app.module';
import { LottieModule } from 'ngx-lottie';


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
  ]
})
export class MessageModule { }
