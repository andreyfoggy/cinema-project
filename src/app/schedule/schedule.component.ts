import { Component, OnInit } from '@angular/core';
import { MockService } from '../shared/services/mock.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private mock: MockService, private route: ActivatedRoute, private router: Router) {
  }
  public getDay(day) {
    const weekDay = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ];
    const object = {label: null, param: null };
    const scheduleDate = this.addDays(day);

    if (day === 0) {
      object.label = 'Сегодня';
    } else {
      object.label =  `${scheduleDate.getDate()} ${weekDay[scheduleDate.getDay()]}`;
    }

    object.param = this.getParsedDate(scheduleDate);
    return object;
  }

  private addDays(daysNumber) {
    const date = new Date();
    date.setDate(date.getDate() + daysNumber);
    return date;
  }

  ngOnInit() {
    for (let d = 0; d < 5; d++) {
      this.days.push(this.getDay(d));
    }
    this.filmList = this.mock.getFilms();
    this.fullList = this.mock.getFilms();
    this.route.queryParams.subscribe(dateParams => {
      if (dateParams.date) {
        this.date = dateParams.date || this.date;
        this.filterFilms(this.date);
      } else {
        this.router.navigate(['/schedule'], { queryParams: { date: this.days[0].param}});
      }
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
