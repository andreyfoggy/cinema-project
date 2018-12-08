import { Component } from '@angular/core';

@Component({
  selector: 'app-seats-area',
  templateUrl: './seats-area.component.html',
  styleUrls: ['./seats-area.component.scss']
})
export class SeatsAreaComponent {

  seatsArr = [
    {
      seatNumber: '01',
      isReserved: false,
      row: 2
},

{seatNumber: '02'}, {seatNumber: '03'}, {seatNumber: '04'},
               {seatNumber: '05'}, {seatNumber: '06'}, {seatNumber: '07'}, {seatNumber: '08'},
               {seatNumber: '09'}, {seatNumber: '10'}, {seatNumber: '11'}, {seatNumber: '12'},
               {seatNumber: '13'}, {seatNumber: '14'}, {seatNumber: '15'}, {seatNumber: '16'},
               {seatNumber: '17'}, {seatNumber: '18'}, {seatNumber: '19'}, {seatNumber: '20'},
               {seatNumber: '21'}, {seatNumber: '22'}, {seatNumber: '23'}, {seatNumber: '24'},
               {seatNumber: '25'}, {seatNumber: '26'}, {seatNumber: '27'}, {seatNumber: '28'},
               {seatNumber: '29'}, {seatNumber: '30'}, {seatNumber: '31'}, {seatNumber: '32'},
               {seatNumber: '33'}, {seatNumber: '34'}, {seatNumber: '35'}, {seatNumber: '36'},
               {seatNumber: '37'}, {seatNumber: '38'}, {seatNumber: '39'}, {seatNumber: '40'},
               {seatNumber: '41'}, {seatNumber: '42'}, {seatNumber: '43'}, {seatNumber: '44'},
               {seatNumber: '45'}, {seatNumber: '46'}, {seatNumber: '47'}, {seatNumber: '48'} 
              ];

  constructor() {
    // console.log(this);
  }


}
