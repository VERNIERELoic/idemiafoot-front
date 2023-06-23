import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/coming-soon.json',
    autoplay: true,
    loop: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
