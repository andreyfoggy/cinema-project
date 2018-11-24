import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { StoreModule} from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GalleryModule } from './gallery/gallery.module';
import { ScheduleModule } from './schedule/schedule.module';

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
    ScheduleModule
  //   EffectsModule.forRoot([]),
  //  // StoreModule.forRoot(reducers, {metaReducers}),
  //  // StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// в папке апп будет папка core -> core module и все его компоненты.
// папка shared -> shared module и его элементы сервисы...
// папка register -> regModule
//  папка book-tickets с модулем бук тикетс
