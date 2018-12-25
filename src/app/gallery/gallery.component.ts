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
  public fullList = [];
  public film: any;
  public sessionList$;
  public date: string;
  constructor(private mock: MockService) {

  }

  ngOnInit() {
    this.filmList = this.mock.getFilms();
    this.fullList = this.mock.getFilms();
    this.date = this.getParsedDate(new Date().getTime());
  }

  filterFilms(value) {
    const searchQuery = value.toLowerCase();
    this.filmList = JSON.parse(JSON.stringify(this.fullList));
    this.filmList = this.filmList.filter((item) => {
        const searchValue = item.name.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
    });
  }
  private getParsedDate(millisconds) {
    const date = new Date(millisconds);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}.${month}.${year}`;
  }
}
