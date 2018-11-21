import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnounceComponent } from './containers/announce/announce.component';
import { MainComponent } from './containers/main/main.component';
import { AboutComponent } from './containers/about/about.component';
import { ScheduleComponent } from './containers/schedule/schedule.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main'},
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'announce',
    component: AnnounceComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'tickets',
    loadChildren: './shared/book-tickets/book-tickets.module#BookTicketsModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
