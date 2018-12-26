import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';
import { MockService } from 'src/app/shared/services/mock.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})


export class DescriptionComponent implements OnInit {
  public iframe_html: string;
  public toggleTrailer: boolean;
  public film: any;
  public days = [];
  public date: String;

  constructor(private route: ActivatedRoute, private embedService: EmbedVideoService,
      private router: Router, private mock: MockService) {
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

  private getParsedDate(millisconds) {
    const date = new Date(millisconds);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}.${month}.${year}`;
  }


  public showTrailer ($element) {
    this.toggleTrailer = !this.toggleTrailer;
    if (this.toggleTrailer === true) {
      $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }

  public scrollTo ($element) {
      $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  public checkDate(date, start, end) {
    return date >= start && date <= end;
  }
  ngOnInit() {
    for (let d = 0; d < 5; d++) {
      this.days.push(this.getDay(d));
    }
    this.route.params
      .subscribe(params => {
        this.film = this.mock.getFilmById(Number(params['id']));
        this.route.queryParams
          .subscribe(dateParams => {
            this.date = dateParams.date;
          });
      });

    this.iframe_html = this.embedService
      .embed(this.film.youtube, { query: { portrait: 0, color: '333' }, attr: { width: '100%', height: 450 } });
  }
}

