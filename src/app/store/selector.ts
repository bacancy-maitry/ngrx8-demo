import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './reducer';

// export const getUserState = (state: AppState) => state;

export const getUserState = createFeatureSelector<AppState>('users');

export const loader = createSelector(getUserState, (state: AppState) => {
  return state.isLoading;
});

export const getAllUsers = createSelector(getUserState, (state: AppState) => {
  return state.users;
});

export const firstTenUsers = createSelector(getUserState, (state: AppState) => {
  const users = state.users.slice(0, 10);
  return {...state, users};
});

export const getUserById = createSelector(
  getUserState,
  (state: AppState, props) => {
    let filterDataArray = [];
    if (state.users) {
      filterDataArray = state.users.filter((data) => {
        return data.userId === props.userId;
      });
      return filterDataArray;
    } else {
      return state.users;
    }
  }
);
