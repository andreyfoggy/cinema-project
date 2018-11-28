import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';


const routes: Routes = [
  {
    path: '', component: GalleryComponent
  },
  {
    path: '**', redirectTo: ''
  },
  // {
  //   path: '/poster:ID', component: Po
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
