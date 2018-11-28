
import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { PosterComponent } from './poster/poster.component';
@NgModule({
  declarations: [
    GalleryComponent,
    PosterComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
