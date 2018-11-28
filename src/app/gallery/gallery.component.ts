import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/services/store.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private store: StoreService) {
    let test = store.asynchGetFilms()
  }

  ngOnInit() {
  }

}
