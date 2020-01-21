import { createSelector } from '@ngrx/store';
import { State } from './reducer';

export const getUserState = (state: State) => state;

export const allUsers = createSelector(getUserState, (state: State) => {
  return state;
});
