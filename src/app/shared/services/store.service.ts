import { select, Store } from '@ngrx/store';
import { PushAction } from '../../core/store/actions/films.actions';
import * as filmSelectors from '../../core/store/films.selectors';
import { State, getFilms } from '../../core/store/index';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class StoreService {
    private sessionList$: Observable<any>;
    constructor(private store: Store<State>) {
        this.sessionList$ = this.store.select(filmSelectors.getFilmsState);
    }
    public asynchGetFilms (): Observable<any> {
        return this.store.pipe(select(getFilms));
    public pushBookedTickets(item): void {
        this.store.dispatch(new PushAction(item));
      }
    public getBookedTickets() {
        return this.sessionList$;
    }
}
