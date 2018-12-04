import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { PosterComponent } from './poster/poster.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
@NgModule({
  declarations: [
    GalleryComponent,
    PosterComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    CoreModule,
    HttpClientModule,
    EmbedVideo.forRoot()
  ]
})
export class GalleryModule { }
