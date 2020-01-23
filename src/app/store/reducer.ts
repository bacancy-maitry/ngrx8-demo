import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './action';
import { IUser } from '../_interfaces/user';

export interface AppState {
  users: IUser[];
  isLoading: boolean;
  message: string;
}

const initialState: AppState = {
  users: [],
  isLoading: false,
  message: '',
};

const myReducer = createReducer(
  initialState,
  on(UserActions.GetUser,
    state => ({
      ...state,
      isLoading: true
    })
  ),

  on(UserActions.GetUserSuccess, (state, { payload }) => ({
    ...state,
    users: payload,
    isLoading: false,
    message: 'Data fetch Successfully!',
    error: 'No Errors!',
  })),

  on(UserActions.GetUserFail, (state, { errors }) => ({
    ...state,
    users: [],
    isLoading: false,
    message: 'Something went wrong while get user!',
    error: errors,
  })),

  on(UserActions.PostUser,
    state => ({
      ...state,
      isLoading: true
    })
  ),

  on(UserActions.PostUserSuccess, (state, { payload }) => ({
      users: [...state.users, payload],
      isLoading: false,
      message: 'Data Updated Successfully!',
      error: 'No Errors!',
  })),

  on(UserActions.PostUserFail, (state, { errors }) => ({
    ...state,
    isLoading: false,
    message: 'Something went wrong while post user!',
    error: errors,
  })),

);
export function reducer(state: AppState | undefined, action: Action) {
  return myReducer(state, action);
}
