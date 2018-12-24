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

  constructor(private route: ActivatedRoute, private embedService: EmbedVideoService,
      private router: Router, private mock: MockService) {
      for (let d = 0; d < 5; d++) {
        this.days.push(this.getDay(d));
      }
  }

  public getDay(day) {
    const weekDay = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ];
    const newDay = new Date();
    newDay.setDate(newDay.getDate() + day);
    return (newDay.getDate() ===  new Date().getDate() ) ? 'Сегодня' :  `${newDay.getDate()} ${weekDay[newDay.getDay()]}`;
  }

  public showTrailer () {
    this.toggleTrailer = !this.toggleTrailer;
  }

  public scrollTo ($element) {
      $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.film = this.mock.getFilmById(Number(params['id']));
        console.log(this.film);
    });
    this.iframe_html = this.embedService
      .embed(this.film.youtube, { query: { portrait: 0, color: '333' }, attr: { width: '100%', height: 450 } });
  }

}

