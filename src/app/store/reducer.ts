import { createReducer, on, Action } from '@ngrx/store';
import { IUser } from '../_interfaces/user';
import * as UserActions from './action';
import { HttpErrorResponse } from '@angular/common/http';

export interface State {
  data: IUser[];
  isLoading: boolean;
  message: string;
  error?: HttpErrorResponse;
}

const initialState = {
  data: [],
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
    data: payload,
    isLoading: false,
    message: 'Data fetch Successfully!',
    error: 'No Errors!',
  })),

  on(UserActions.GetUserFail, (state, { errors }) => ({
    ...state,
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
      data: [...state.data, payload],
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
export function reducer(state: State | undefined, action: Action) {
  return myReducer(state, action);
}
