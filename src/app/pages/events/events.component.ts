import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/core/services/events/events.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { firstValueFrom, interval, Subscription, timer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Data } from '@angular/router';

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
  teams: any = [];
  teamPlayers: any = [];
  freePlayers: any = [];
  currentUser: any;
  selectedEventId: number | undefined;
  position: number = 1;
  isTimeToConfirm: boolean = true;
  event: any;
  tabs: any = [];
  selectedIndex = 0;
  today: any;
  listOfCurrentPageData: readonly Data[] = [];
  pageSize: any | undefined;

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

  async ngOnInit(): Promise<void> {
    try {
      this.validateForm = this.fb.group({
        date: [null, [Validators.required]],
        sport: [null, [Validators.required]],
      });
      this.onEvents();
      this.today = new Date();
      this.currentUser = await firstValueFrom(this.authService.current())
    } catch (error) {
      console.error(error);
    }
  }

  async onEvents() {
    const res: any = await firstValueFrom(this.eventsService.getAll());

    this.today.setHours(0, 0, 0, 0);

    this.events = res.map((item: {
      isPast: boolean; date: string | number | Date;
    }) => {
      const itemDate = new Date(item.date);
      itemDate.setHours(0, 0, 0, 0);

      item.isPast = itemDate < this.today;

      return item;
    });

    this.events.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }

  async onPlayers(eventId: any) {
    this.selectedEventId = eventId;
    this.players = await firstValueFrom(this.eventsService.getUserEventPlayers(eventId));
    this.event = await firstValueFrom(this.eventsService.getEvent(eventId));
  }

  async onTeams(eventId: any) {
    this.teams = [];
    this.teams = await firstValueFrom(this.eventsService.getTeamsByEvent(eventId));
    timer(5000);
    this.event = await firstValueFrom(this.eventsService.getEvent(eventId));
    this.checkTimetoConfirm(this.event.date); 
  }

  async onTeamPlayers(index: any) {
    const teamId = this.teams[index.index].id;
    this.teamPlayers = [];
    this.teamPlayers = await firstValueFrom(this.eventsService.getUsersByTeam(teamId));
  }

  async onFreePlayers() {
    this.freePlayers = [];
    this.freePlayers = await firstValueFrom(this.eventsService.getFreePlayers(this.selectedEventId));
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
    await firstValueFrom(this.eventsService.addPlayerToEvent(eventId, this.currentUser.id))
      .then(() => {
        this.notificationService.success("Succes", "You have been added to the event");
        this.onPlayers(eventId);
      }).catch((error) => {
        console.error(error);
        this.notificationService.error("Error", error);
      });
  }


  async deletePlayerFromEvent() {
    this.showModalMiddleManageTeams();
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


  async confirmDelete(id: any): Promise<void> {
    try {
      const response: any = await firstValueFrom(this.eventsService.removeEvent(id));
      this.nzMessageService.success('Event deleted');
      this.onEvents();
    } catch (error) {
      this.nzMessageService.error('Error deleting event');
      console.log(error);
    }
  }

  async confirmPlayer(eventId: any) {
    await firstValueFrom(this.eventsService.confirmUser(eventId, this.currentUser.id))
      .then(() => {
        this.notificationService.success("Succes", "Your spot has been confirmed for this event");
        this.onPlayers(eventId);
      }).catch((error) => {
        console.error(error);
        this.notificationService.error("Error", error.message);
      });
  }

  checkTimetoConfirm(date: Date): void {
    this.isTimeToConfirm = true;
    let dateType = new Date(date);
    const timeUntilEvent = dateType.getTime() - new Date().getTime() - 4 * 60 * 60 * 1000;

    if (timeUntilEvent > 0) {
      const source = timer(timeUntilEvent);
      source.subscribe(() => {
        this.isTimeToConfirm = true;
        console.log(this.isTimeToConfirm);
      });
    } else {
      this.isTimeToConfirm = false;
    }
  }

  async deleteTeam({ index }: { index: number }) {
    await firstValueFrom(this.eventsService.deleteTeam(this.teams[index].id)).then(() => {
      this.nzMessageService.success('Event deleted');
      this.onTeams(this.selectedEventId);
    }).catch((error) => {
      console.error(error);
      this.notificationService.error("Error", error.message);
    });
  }

  async createTeam() {
    await firstValueFrom(this.eventsService.createTeam(this.selectedEventId))
      .then(() => {
        this.onTeams(this.selectedEventId);
        this.selectedIndex = this.tabs.length;
        this.notificationService.success("Succes", "Team created");
      }).catch(() => {
        this.notificationService.error("Error", "Team can't be created");
      });
  }

  async addPlayerToTeam(users: any[], index: any) {
    const userIds = users.map(user => user.id);
    const teamIds = this.teams[index].id;
    await firstValueFrom(this.eventsService.addPlayerToTeam(userIds, teamIds))
      .then(() => {
        this.freePlayers = this.freePlayers.filter((player: { id: any; }) => !userIds.includes(player.id));
        this.notificationService.success("Succes", "Players " + userIds + " added to team " + this.teams[index].id);
      }).catch((error) => {
        console.error(error);
        this.notificationService.error("Error", error.message);
      });
  }

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  newTab(): void {
    this.tabs.push('Team ' + this.tabs.length);
    this.selectedIndex = this.tabs.length;
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }
}