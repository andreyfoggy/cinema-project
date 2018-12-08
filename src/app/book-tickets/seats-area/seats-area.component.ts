import { Component } from '@angular/core';

@Component({
  selector: 'app-seats-area',
  templateUrl: './seats-area.component.html',
  styleUrls: ['./seats-area.component.scss']
})
export class SeatsAreaComponent {

  seatsArr: Array<number>  = [7, 10, 25, 26, 27, 35]; // такие данные будут приходить - нужно передать
  hallDimension: Array<number> = [6, 9]; // размеры зала, можно использовать как параметр arrayOf
  constructor() {
    // console.log(this);
  }

  public arrayOf(n: number): any[] { // для ngFor - задает количество мест
    return Array(n);
  }

}
