import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/services/store.service';
import { FilmList } from '../shared/storage/film-list';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  private fullList = [];
  public filmList = FilmList;
  public film: any;

  constructor(private store: StoreService) {
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
