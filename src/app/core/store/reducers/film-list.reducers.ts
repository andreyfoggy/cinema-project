import { FilmsActionsUnion, FilmsActionTypes } from '../actions/films.actions';

export  interface IFilmsState {
    films: any[];
  }
  export const initialState: IFilmsState = {
    films: []
  };

export function reducer(state: IFilmsState = initialState, action): IFilmsState {
    switch (action.type) {
      case FilmsActionTypes.GET_FILMS_SUCCESS :
        return {
          ...state,
          films: action.payload
        };
      default:
        return state;
    }
  }
