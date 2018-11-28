import * as fromFilms from './reducers/film-list.reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface State {
    todo: fromFilms.IFilmsState;
  }

export const reducers: ActionReducerMap <State> = {
    todo: fromFilms.reducer
  };

  export const getFilms = (state: State) => state.todo.films;
