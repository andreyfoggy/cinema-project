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
  private fragment: string;

  constructor(private route: ActivatedRoute, private embedService: EmbedVideoService,
     private router: Router, private mock: MockService) {


  }
  public showTrailer () {
    this.toggleTrailer = !this.toggleTrailer;
  }

  async scrollTo ($element) {
      await this.showTrailer ();
      $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.film = this.mock.getFilmById(Number(params['id']));
    });
    this.iframe_html = this.embedService
      .embed(this.film.youtube, { query: { portrait: 0, color: '333' }, attr: { width: '100%', height: 450 } });
  }

}

