import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookTicketsRoutingModule } from './book-tickets-routing.module';
import { BookTicketsComponent } from './book-tickets.component';

@NgModule({
  imports: [
    CommonModule,
    BookTicketsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    BookTicketsComponent
  ]
})
export class BookTicketsModule { }
