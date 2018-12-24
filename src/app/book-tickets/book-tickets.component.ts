import { Component } from '@angular/core';
import { StoreService } from '../shared/services/store.service';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.scss']
})
export class BookTicketsComponent {

  public canBuyTicket = false;
  public chooseTickets = [];
  public costTicket = 90.00;

  constructor (private store: StoreService) {
  }
  public getChair(event) {
    if (event.reserve === true) {
      this.chooseTickets.push(event) ;
    } else {
      this.chooseTickets.forEach( (item, i) => {
        if (item.reserve === false) {
          this.chooseTickets.splice ( i, 1 );
        }
      });
    }
    this.canBuyTicket = this.chooseTickets.length > 0 ?  true : false;
  }

  makeOrder() {
  //  console.log(this);
  }
}
