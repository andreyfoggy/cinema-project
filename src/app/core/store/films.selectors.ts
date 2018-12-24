import { createFeatureSelector } from '@ngrx/store';

export  interface IFilmsState {
  films: any;
}
export const getFilmsState = createFeatureSelector<IFilmsState>(
  'sessions'
);
