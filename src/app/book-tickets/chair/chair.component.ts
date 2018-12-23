import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.scss']
})
export class ChairComponent {
  @Input() chair: any;
  @Output() chooseChair = new EventEmitter<object>();

  constructor() {

  }

  reserveSeat() {
    //this.chair = {...this.chair, reserve = !reserse}
    if (this.chair.disabled) return
    this.chair.reserve = !this.chair.reserve
    console.log( this.chair)
    this.chooseChair.emit(this.chair);
  }
}
