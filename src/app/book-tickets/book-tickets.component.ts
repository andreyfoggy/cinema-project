import { Component } from '@angular/core';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.scss']
})
export class BookTicketsComponent {

  public canBuyTicket: Boolean = false;
  public chooseTickets = [];
  public costTicket: Number = 90.00;

  constructor () {
    console.log(this.chooseTickets);
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

    this.canBuyTicket = this.chooseTickets.length > 0 ?  true : false;
    console.log(this.canBuyTicket);
  }

  makeOrder() {
  //  console.log(this);
  }
}
