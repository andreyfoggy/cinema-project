import { Action } from '@ngrx/store';
import { PUSH } from '../actions/films.actions';
export  interface IFilmsState {
    films: any;
  }
export const initialState: IFilmsState = {
    films: [  {
      time: 1,
      date: '27.12.2018',
      film: 'avatar',
      seats:  [1, 3, 6]
      },
      {
      time: 2,
      date: '27.12.2018',
      film: 'avatar',
      seats:  [11, 33, 36]
      },
      {
      time: 1,
      date: '28.12.2018',
      film: 'avatar',
      seats:  [11, 13, 16]
      },
    ]
  };

export function sessionStore(
  state: IFilmsState = initialState,
  action: Action
  ): IFilmsState {
    switch (action.type) {
      case PUSH: {
        const data = changeSessionStore(state.films, action.payload);
        return {
          films: data
        };
      }
      default: {
        return {
          films: state.films
        };
      }
    }
  }

function changeSessionStore(data, item) {
    let check;
    for (const session of data) {
      if (compareSessions(session, item)) {
        session.seats = item.seats;
        check = true;
        break;
      }
    }
    if (!check) {
      data.push(item);
    }
    return data;
  }

  function compareSessions(session, item) {
    if (session.time === item.time && session.date === item.date && session.film === item.film) {
        return true;
    } else {
        return false;
    }
}
