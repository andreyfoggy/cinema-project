import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.scss']
})
export class ChairComponent {
  @Input() chair: {};
  isReserved: boolean;
  chairNumber = 24; //  --> @input
  picURL = 'assets/images/user-regular.svg';



  constructor() {
  }

  // reserveSeat() {
  //   // debugger
  //     (this.isReserved === false) ? this.isReserved = true : this.isReserved = false;
  //     console.log(this.isReserved);
  // }
}
