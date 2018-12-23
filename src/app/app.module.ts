import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GalleryModule } from './gallery/gallery.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AppStoreModule } from './core/store/store.module';
import { StoreService } from './shared/services/store.service';
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
    AppStoreModule,
    HttpClientModule,
    EmbedVideo.forRoot()
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// в папке апп будет папка core -> core module и все его компоненты.
// папка shared -> shared module и его элементы сервисы...
// папка register -> regModule
//  папка book-tickets с модулем бук тикетс
