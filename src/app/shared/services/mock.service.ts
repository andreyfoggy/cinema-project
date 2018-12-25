import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filmList } from '../storage/film-list';
@Injectable()
export class MockService {

    constructor() {

    }

    public getFilms() {
        return filmList;
    }
    public getFilmById(id: number) {
        return filmList.find(film => film.id === id);
    }
}
