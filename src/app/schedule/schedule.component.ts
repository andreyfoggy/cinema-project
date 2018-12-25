import { Component, OnInit } from '@angular/core';
import { MockService } from '../shared/services/mock.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  private fullList = [];
  public filmList = [];
  private date: string;
  public days = [];

  constructor(private mock: MockService, private route: ActivatedRoute) {
  }
  public getDay(day) {
    const weekDay = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ];
    const obj = {label: null, param: null };
    obj.label = new Date();
    obj.label.setDate(obj.label.getDate() + day);
    obj.param = this.getParsedDate(obj.label);
    obj.label =  (obj.label.getDate() ===  new Date().getDate() ) ? 'Сегодня' :  `${obj.label.getDate()} ${weekDay[obj.label.getDay()]}`;
    return obj;
  }

  ngOnInit() {
    for (let d = 0; d < 5; d++) {
      this.days.push(this.getDay(d));
    }
    this.date = this.days[0].param;
    this.filmList = this.mock.getFilms();
    this.fullList = this.mock.getFilms();
    this.route.queryParams.subscribe(dateParams => {
      this.date = dateParams.date || this.date;
      this.filterFilms(this.date);
    });
  }

  private getParsedDate(millisconds) {
    const date = new Date(millisconds);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}.${month}.${year}`;
  }

  public filterFilms(date) {
    this.filmList = JSON.parse(JSON.stringify(this.fullList));

    this.filmList = this.filmList.filter((film) => {
      const start = film.startDate.split('.').reverse().join('');
      const current = date.split('.').reverse().join('');
      const end = film.endDate.split('.').reverse().join('');
      return (start <= current && current <= end);
    });
  }
}
