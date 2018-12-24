import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { FilmList } from '../shared/storage/images';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  private fullList = [];
  public filmList = FilmList;
  public film: any;

  constructor() {
    // let test = store.asynchGetFilms();
    this.fullList = JSON.parse(JSON.stringify(this.filmList));
    console.log (this);
  }

  public getFilm(event) {
    this.film = event;
    console.log (this.film);
  }

  ngOnInit() {

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
