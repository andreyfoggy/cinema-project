import * as fromFilms from './reducers/film-list.reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface State {
    films: fromFilms.IFilmsState;
  }

export const reducers: ActionReducerMap <State> = {
    films: fromFilms.sessionStore
  };

// export const getFilms = (state: State) => state.todo.films;
