import { Action } from '@ngrx/store';

export const PUSH = 'PUSH';


export class PushAction implements Action {
  public readonly type: string = PUSH;

    constructor(public payload: Object) {}
}
