import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { FilmList } from '../shared/storage/film-list';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  private fullList = [];
  public filmList = FilmList;

  public days = [];

  constructor(private http: HttpService) {
    this.fullList = JSON.parse(JSON.stringify(this.filmList));
    for (let d = 0; d < 5; d++) {
      this.days.push(this.getDay(d));
    }
    console.log(this.filmList);
  }
  public getDay(day) {
    const weekDay = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ];
    const newDay = new Date();
    newDay.setDate(newDay.getDate() + day);
    return (newDay.getDate() ===  new Date().getDate() ) ? 'Сегодня' :  `${newDay.getDate()} ${weekDay[newDay.getDay()]}`;
}

  ngOnInit() {

  }


  // public filterFilms(value) {
  //   const searchQuery = value.toLowerCase();
  //   this.filmList = JSON.parse(JSON.stringify(this.fullList));
  //   this.filmList = this.filmList.filter((item) => {
  //       const searchValue = item.title.toLowerCase();
  //       return searchValue.indexOf(searchQuery) !== -1;
  //   });
  // }

}
