import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { AnnounceComponent } from './containers/announce/announce.component';
import { AboutComponent } from './containers/about/about.component';
import { MainComponent } from './containers/main/main.component';
import { ScheduleComponent } from './containers/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    AnnounceComponent,
    AboutComponent,
    MainComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
