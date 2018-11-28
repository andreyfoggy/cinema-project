import { Action } from '@ngrx/store';

export enum FilmsActionTypes {
    GET_FILMS = '[FILMS] Fetch films requested',
    GET_FILMS_SUCCESS = '[FILMS] Fetch films success',
    GET_FILMS_FAIL = '[FILMS] Fetch films failed',
  }

  export class GetFilms implements Action {
    readonly type = FilmsActionTypes.GET_FILMS;
  }
  export class GetFilmsFail implements Action {
    readonly type = FilmsActionTypes.GET_FILMS_FAIL;
  }
  export class GetFilmsSuccess implements Action {
    readonly type = FilmsActionTypes.GET_FILMS_SUCCESS;
    constructor(public payload) {}
  }

export type FilmsActionsUnion = GetFilms | GetFilmsSuccess | GetFilmsFail;
