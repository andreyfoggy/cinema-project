import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})


export class DescriptionComponent implements OnInit {
  public iframe_html: string;
  public toggleTrailer: boolean;
  public filmList = {};
  public sub: any;
  public film: any;
    // [ngStyle]="{'background-image': 'url(' + filmList.image.split('@')[1] + ')'}"
  public id: number;
  private subscription: Subscription;
  constructor(private route: ActivatedRoute, private embedService: EmbedVideoService, private router: Router) {
    this.subscription = route.params.subscribe(params => this.id = params['id']);
    // this.iframe_html = this.embedService
    //   .embed(this.filmList.youtube, { query: { portrait: 0, color: '333' }, attr: { width: '100%', height: 450 } });
    console.log(this);
  }
  public showTrailer () {
    this.toggleTrailer = !this.toggleTrailer;
  }

  ngOnInit() {

  }
}

