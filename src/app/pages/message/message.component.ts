import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Subscription, from } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { SocketService } from 'src/app/core/services/socket/socket.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  message: any;
  newMessage = '';
  messages: any = []
  currentUser: any;
  connectedUsers: any = [];
  color: any;
  private userSubscription?: Subscription;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef | undefined;

  constructor(private socketService: SocketService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.current().subscribe(user => this.currentUser = user);
    if (this.authService.getToken()) {
      this.currentUser = this.authService.current().subscribe();
    }

    this.onMessage();

    this.socketService.listen('messageFromServer').subscribe((newMessage) => {
      this.messages.push(newMessage);
    });

    this.socketService.listen('users').subscribe((users) => {
      this.connectedUsers = users;
      console.log('Connected:', this.connectedUsers);
    });
    this.scrollToBottom();
    this.color = this.generateRandomColor();
  }

  sendMsg(message: any) {
    if (message) {
      this.socketService.emit('message', { user: this.currentUser, text: message });
      this.message = '';
    }
  }

  async onMessage() {
    this.messages = await this.socketService.findAll().toPromise();
    this.messages.sort((a: { createdAt: string | number | Date; }, b: { createdAt: string | number | Date; }) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    console.log(this.messages)
  }

  options: AnimationOptions = {
    path: '/assets/lottie/coming-soon.json',
    autoplay: true,
    loop: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  onAnimate(animationItem: AnimationItem): void {
  }


  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      if (this.myScrollContainer && this.myScrollContainer.nativeElement) {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      }
    } catch (err) { }
  }

  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
}
