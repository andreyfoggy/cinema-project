import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.scss']
})
export class ChairComponent {
  @Input() chair: any;
  @Input() canBuyTicket = true;
  @Output() chooseChair = new EventEmitter<object>();

  constructor() {

  }

  reserveSeat() {
    if ( this.chair.disabled ) { return; }
    this.chair.reserve = !this.chair.reserve;
    if (!this.canBuyTicket && this.chair.reserve ) {
      this.chair.reserve = false;
      return;
    }
    this.chooseChair.emit(this.chair);
  }
}
