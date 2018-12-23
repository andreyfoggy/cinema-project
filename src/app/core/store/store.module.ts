import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {reducers} from './index';
// import {EffectsModule} from '@ngrx/effects';
// import {FilmsEffects} from './effects/films.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
  //  EffectsModule.forRoot([FilmsEffects])
  ]
})

export class AppStoreModule { }
