import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTicketsRoutingModule } from './book-tickets-routing.module';
import { BookTicketsComponent } from './book-tickets.component';
import { ChairComponent } from './chair/chair.component';
import { SeatsAreaComponent } from './seats-area/seats-area.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    BookTicketsRoutingModule,
    CoreModule
  ],
  declarations: [
    BookTicketsComponent,
    ChairComponent,
    SeatsAreaComponent
  ]
})
export class BookTicketsModule { }
