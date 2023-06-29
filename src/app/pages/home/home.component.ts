import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  options: AnimationOptions = {
    path: 'assets/lottie/soccer-field.json'
  };
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
