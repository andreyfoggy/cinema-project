import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { ScheduleRoutingModule } from './schedule.routing';
import { ScheduleItemComponent } from './schedule-item/schedule-item.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    CoreModule
  ],
  declarations: [
    ScheduleComponent,
    ScheduleItemComponent
  ]
})
export class ScheduleModule { }
