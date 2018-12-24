import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { filmList } from '../shared/storage/film-list';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  private fullList = [];
  public filmList = filmList;

  public days = [];

  constructor(private http: HttpService) {
    this.fullList = JSON.parse(JSON.stringify(this.filmList));
    for (let d = 0; d < 5; d++) {
      this.days.push(this.getDay(d));
    }
  }
  public getDay(day) {
    const weekDay = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ];
<<<<<<< HEAD
    const obj = {label: null, param: null };
    obj.label = new Date();
    obj.label.setDate(obj.label.getDate() + day);
    obj.param = this.getParsedDate(obj.label);
    obj.label =  (obj.label.getDate() ===  new Date().getDate() ) ? 'Сегодня' :  `${obj.label.getDate()} ${weekDay[obj.label.getDay()]}`;
    return obj;
=======
    const newDay = new Date();
    newDay.setDate(newDay.getDate() + day);
    console.log(newDay.setDate(newDay.getDate() + day))
    return (newDay.getDate() ===  new Date().getDate() ) ? 'Сегодня' :  `${newDay.getDate()} ${weekDay[newDay.getDay()]}`;
>>>>>>> 7cff1566b46f0854c53969ef60759f3422a1565f
  }

  ngOnInit() {

  }

private getParsedDate(millisconds) {
  const date = new Date(millisconds);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}.${month}.${year}`;
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
