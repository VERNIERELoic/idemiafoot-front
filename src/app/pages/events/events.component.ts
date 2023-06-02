import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/core/services/events/events.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { firstValueFrom, interval, Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  eventsSub: Subscription;
  isVisibleCreateEvent = false;
  isVisibleJoin = false;
  validateForm!: UntypedFormGroup;
  events: any = [];
  currentDate = new Date();
  players: any = [];
  currentUser: any;
  selectedEventId: number | undefined;
  position: number = 1;



  constructor(private nzMessageService: NzMessageService,
    private fb: UntypedFormBuilder,
    private eventsService: EventsService,
    private notificationService: NzNotificationService,
    public authService: AuthService,
    public msg: NzMessageService) {
    this.eventsSub = interval(8000).subscribe((func => {
      if (this.isVisibleJoin == false) {
        this.onEvents();
      }
    }))
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      date: [null, [Validators.required]],
      sport: [null, [Validators.required]],
    });
    this.onEvents();
  }

  onEvents() {
    const sb = this.eventsService.getAll().subscribe((res: any) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      this.events = res.map((item: {
        isPast: boolean; date: string | number | Date;
      }) => {
        const itemDate = new Date(item.date);
        itemDate.setHours(0, 0, 0, 0);

        item.isPast = itemDate < today;
        return item;
      });

      this.events.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
      sb.unsubscribe();
    });
  }

  onPlayers(eventId: any) {
    this.selectedEventId = eventId;
    this.eventsService.getEventPlayers(eventId).subscribe(((res: any) => {
      this.players = res;
    }))
  }

  async submitForm() {
    await firstValueFrom(this.eventsService.createEvent(this.validateForm.value))
      .then(() => {
        this.notificationService.success("Succes", "Event created");
        this.isVisibleCreateEvent = false;
        this.onEvents();
      }).catch(() => {
        this.notificationService.error("Error", "Event not created");
      });
  }

  async addPlayerToEvent(eventId: any) {
    this.currentUser = await firstValueFrom(this.authService.current())
    console.log(eventId);
    await firstValueFrom(this.eventsService.addPlayerToEvent(eventId, this.currentUser.id))
      .then(() => {
        this.notificationService.success("Succes", "You have been added to the event");
        this.onPlayers(eventId);
      }).catch((error) => {
        console.error(error);
        this.notificationService.error("Error", error.message);
      });
  }


  async deleteUserFromEvent() {
    this.showModalMiddleManageTeams();
    this.currentUser = await firstValueFrom(this.authService.current())
    console.log(this.selectedEventId);
    await firstValueFrom(this.eventsService.deleteUserFromEvent(this.selectedEventId, this.currentUser.id))
      .then(() => {
        this.notificationService.success("Succes", "You have been deleted from event");
        this.onPlayers(this.selectedEventId);
      }).catch((error) => {
        console.error(error);
        this.notificationService.error("Error", error.message);
      });
  }

  refresh() {
    this.onEvents();
  }

  showModalMiddleCreateEvent(): void {
    this.isVisibleCreateEvent = true;
  }

  handleOkMiddleCreateEvent(): void {
    this.isVisibleCreateEvent = false;
  }

  handleCancelMiddleCreateEvent(): void {
    this.isVisibleCreateEvent = false;
  }

  showModalMiddleManageTeams(): void {
    this.isVisibleJoin = true;
  }

  handleOkMiddleManageTeams(): void {
    this.isVisibleJoin = false;
  }

  handleCancelMiddleManageTeams() {
    this.isVisibleJoin = false;
  }

  cancelDelete(): void {
    this.nzMessageService.info('Cancel');
  }

  confirmDelete(id: any): void {
    this.eventsService.removeEvent(id).subscribe({
      next: (response: any) => {
        this.nzMessageService.success('Event deleted');
        this.onEvents();
      },
      error: (error: any) => {
        this.nzMessageService.error('Error deleting event');
        console.log(error);
      }
    });
  }

}

