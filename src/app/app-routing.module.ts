import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbChatComponent } from '@nebular/theme';
import { AuthGuard } from './core/guards/auth.guard';
import { ChatComponent } from './pages/chat/chat.component';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  { path: 'profile', 
    component: ProfileComponent, 
    canActivate: [AuthGuard] 
  },

  { path: 'events', 
  component: EventsComponent, 
  canActivate: [AuthGuard] 
  },

  { path: 'chat', 
    component: ChatComponent, 
    canActivate: [AuthGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
