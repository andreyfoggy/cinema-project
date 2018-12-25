// import {Action} from '@ngrx/store';
// import {Actions, Effect, ofType} from '@ngrx/effects';
// import {Injectable} from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { catchError, exhaustMap, map } from 'rxjs/operators';
// import * as filmsAction from '../actions/films.actions';
// import { StoreService } from 'src/app/shared/services/store.service';

// @Injectable()
// export class FilmsEffects {
//   @Effect()
//   getTodos$: Observable<Action> = this.actions$
//     .pipe(
//       ofType<filmsAction.GetFilms>(filmsAction.FilmsActionTypes.GET_FILMS),
//       exhaustMap(
//         action => this.storeService.asynchGetFilms().pipe(
//           map(data => ({type: filmsAction.FilmsActionTypes.GET_FILMS_SUCCESS, payload: data})),
//           catchError(() => of({type: filmsAction.FilmsActionTypes.GET_FILMS_FAIL}))
//         )
//       )
//     );



//   constructor(private actions$: Actions, private storeService: StoreService) {}
// }
