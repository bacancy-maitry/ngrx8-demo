import { createAction, props } from '@ngrx/store';
import { IUser } from '../_interfaces/user';
import { HttpErrorResponse } from '@angular/common/http';

export const GetUser = createAction('[User] Get User');

export const GetUserSuccess = createAction(
  '[User] Get User Success',
  props<{ payload: IUser[] }>()
);

export const GetUserFail = createAction(
  '[User] Get User Fail',
  props<{ errors: HttpErrorResponse }>()
);

export const PostUser = createAction(
  '[User] Post User',
   props<{ payload: IUser }>()
);

export const PostUserSuccess = createAction(
  '[User] Post User Success',
  props<{ payload: IUser }>()
);

export const PostUserFail = createAction(
  '[User] Post User Fail',
  props<{ errors: HttpErrorResponse }>()
);
