import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { DescriptionComponent } from '../core/description/description.component';


const routes: Routes = [
  {
    path: '', component: GalleryComponent
  },
  {
    path: 'description/:id',
    component: DescriptionComponent
  },
  {
    path: 'tickets',
    loadChildren: './../book-tickets/book-tickets.module#BookTicketsModule'
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
