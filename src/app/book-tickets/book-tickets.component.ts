import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../shared/services/store.service';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.scss']
})
export class BookTicketsComponent {

  public canBuyTicket = true;
  public chooseTickets = [];
  public disabledChairs = [];
  public costTicket: Number = 90.00;
  public dataToSend = {chairs: [], params: {time: null, date: null, film: null}};
  public film;
  public booked: Boolean;
  public hasTickets: Boolean;

  constructor (private storeService: StoreService) {

  }

  public getChair(event) {
    if (event.reserve === true) {
      this.chooseTickets.push(event);
    } else {
      this.chooseTickets.forEach( (item, i) => {
        if (item.reserve === false) {
          this.chooseTickets.splice ( i, 1 );
        }
      });
    }
    this.canBuyTicket = this.chooseTickets.length < 4 ?  true : false;
    this.hasTickets = this.chooseTickets.length > 0 ?  true : false;
  }
  public getSessionData(data) {
    this.dataToSend = data;
  }

  makeOrder() {
    this.booked = true;
    const sessionInfo = {
      time: Number(this.dataToSend.params.time),
      date: this.dataToSend.params.date,
      film: this.dataToSend.params.film,
      seats: this.dataToSend.chairs.concat(this.getChosenTickets(this.chooseTickets))
    };
    this.storeService.pushBookedTickets(sessionInfo);
  }

  private getChosenTickets(tickets) {
    return tickets.map( ticket => ticket.index);
  }

  public getFilmInfo (film) {
    this.film = film;
  }
}
