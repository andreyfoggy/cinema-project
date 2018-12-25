import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Chair } from '../../shared/models/cinema.models';
import { StoreService } from 'src/app/shared/services/store.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seats-area',
  templateUrl: './seats-area.component.html',
  styleUrls: ['./seats-area.component.scss']
})
export class SeatsAreaComponent implements OnInit {
  @Output() chooseChair = new EventEmitter<object>();
  @Output() dataToSend = new EventEmitter<object>();
  public chair: Chair;
  public chairs = [];
  public rows = [];
  public storeReserve = [12, 14, 46];

  constructor(private storeService: StoreService, private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.route.queryParams
        .subscribe(params => {
          const filmParams = params;
          this.getSessions(filmParams);
      });
  }
  public createChair () {
    let arrChair = 0;
    for (let i = 1; i < 8; i++ ) {
      this.rows.push (i);
      for (let x = 1; x < 9; x++ ) {
        arrChair++;
        this.chair = {
          index: arrChair,
          row: this.rows[i - 1],
          seat: x,
          reserve: false
        };
        this.chair = this.checkIfDisabled(this.chair, this.storeReserve);
        this.chairs.push(this.chair);
      }
    }
  }

  public checkIfDisabled (chair, storeReserve) {
    const item = storeReserve.find( elem => {
      return elem === chair.index;
    });

    if (item) {
      return {...chair, reserve: true, disabled: true};
    } else {
      return chair;
      }
  }

  public getChair(event) {
    this.chooseChair.emit(event);
  }

  public arrayOf(n: number): any[] {
    return Array(n);
  }

  private getSessions(filmParams) {
      const subscription = this.storeService.getBookedTickets()
        .subscribe(data => {
          this.storeReserve = this.getTickets(data.films, filmParams).seats || [];
          this.dataToSend.emit({chairs: this.storeReserve, params: filmParams});
          this.createChair();
        });
      subscription.unsubscribe();
  }

  private getTickets(data, filmParams) {
    return data.find(film => this.compareParams(film, filmParams)) || {};
  }

  private compareParams(session, item) {
    if (session.time === Number(item.time) && session.date === item.date && session.film === item.film) {
        return true;
    } else {
        return false;
    }
  }
}
