import { select, Store } from '@ngrx/store';
import * as FilmsActions from '../../core/store/actions/films.actions';
import { State, getFilms } from '../../core/store/index';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class StoreService {
    private data = of(1, 2, 3);
    private filmList$: Observable<any>;
    constructor(private store: Store<State>) {
        this.store.dispatch({ type: FilmsActions.FilmsActionTypes.GET_FILMS });
    }
    public asynchGetFilms (): Observable<any> {
        return this.store.pipe(select(getFilms));
    }
}
