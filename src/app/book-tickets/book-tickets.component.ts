import { Component } from '@angular/core';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.scss']
})
export class BookTicketsComponent {
  title = 'seatsArea';

  canBuyTikett: boolean;
  ordered: any = false;

  constructor () {
    setTimeout( () => {
      this.canBuyTikett = true;
    }, 4000);
  }

  makeOrder() {
    console.log(this);
  }
}
