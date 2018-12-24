import { Component, OnInit } from '@angular/core';
import { MockService } from '../shared/services/mock.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  // private fullList = [];
  public filmList = [];
  public film: any;

  constructor(private mock: MockService) {
    // this.fullList = JSON.parse(JSON.stringify(this.filmList));
  }

  public getFilm(event) {
    this.film = event;
  }

  ngOnInit() {
    this.filmList = this.mock.getFilms();
  }

  // filterFilms(value) {
  //   const searchQuery = value.toLowerCase();
  //   this.filmList = JSON.parse(JSON.stringify(this.fullList));
  //   this.filmList = this.filmList.filter((item) => {
  //       const searchValue = item.title.toLowerCase();
  //       return searchValue.indexOf(searchQuery) !== -1;
  //   });
  // }
}
