import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule,
    FormsModule,
    CoreModule,
    GalleryModule,
    ScheduleModule,
    AppStoreModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// в папке апп будет папка core -> core module и все его компоненты.
// папка shared -> shared module и его элементы сервисы...
// папка register -> regModule
//  папка book-tickets с модулем бук тикетс
