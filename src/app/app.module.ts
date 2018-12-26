import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { AppComponent } from './app.component';
import { GalleryModule } from './gallery/gallery.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AppStoreModule } from './core/store/store.module';
import { StoreService } from './shared/services/store.service';
import { HttpService } from './shared/services/http.service';
import { MockService } from './shared/services/mock.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    GalleryModule,
    ScheduleModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    AppStoreModule
  ],
  providers: [StoreService, HttpService, MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
