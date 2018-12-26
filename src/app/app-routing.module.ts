import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescriptionComponent } from './core/description/description.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gallery'},
  {
    path: 'gallery',
    loadChildren: './gallery/gallery.module#GalleryModule'
  },
  {
    path: 'schedule',
    loadChildren: './schedule/schedule.module#ScheduleModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'tickets',
    loadChildren: './book-tickets/book-tickets.module#BookTicketsModule'
  },
  {
    path: 'description/:id', component: DescriptionComponent
  },
  {
    path: '**', redirectTo: 'gallery'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
