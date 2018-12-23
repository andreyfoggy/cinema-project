import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/services/store.service';
import { HttpService } from '../shared/services/http.service';
import { FilmList } from '../shared/storage/images';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  private fullList = [];
  public filmList = [];

  constructor(private store: StoreService, private http: HttpService ) {
    let test = store.asynchGetFilms();
    this.fullList = JSON.parse(JSON.stringify(this.filmList));
  }
  
  ngOnInit() {
    this.http.getFilms()
      .subscribe(filmsData => {
        filmsData.map( item => {
          this.filmList = this.createFilmList( FilmList,filmsData)
          console.log(this.filmList)
        })
      });
  }

  private createFilmList(store, filmData) {
    return filmData.map(item => addStoreData(item));
    function addStoreData(item) {
      const film = store.find(storeItem => item.Id === storeItem.id);
      film.genre = item.Genre.Name;
      film.name = item.Name;
      return film;
    }
  }
  
  filterFilms(value) {
    const searchQuery = value.toLowerCase();
    this.filmList = JSON.parse(JSON.stringify(this.fullList));
    this.filmList = this.filmList.filter((item) => {
        const searchValue = item.title.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
    });
  }
}
