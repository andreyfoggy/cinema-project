import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { ScheduleRoutingModule } from './schedule.routing';
import { ScheduleItemComponent } from './schedule-item/schedule-item.component';
import { CoreModule } from '../core/core.module';
import { BookTicketsModule } from '../book-tickets/book-tickets.module';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    CoreModule,
    BookTicketsModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    SharedModule
  ],
  declarations: [
    ScheduleComponent,
    ScheduleItemComponent
  ]
})
export class ScheduleModule { }
