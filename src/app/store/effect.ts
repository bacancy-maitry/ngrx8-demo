// import { Actions, ofType, createEffect } from '@ngrx/effects';

import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from './action';
import { UserService } from '../_services/user.service';
import { IUser } from '../_interfaces/user';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService,
              private router: Router) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.GetUser),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map((users: IUser[]) => UserActions.GetUserSuccess({ payload: users })),
          catchError(errors => of(UserActions.GetUserFail({ errors }))),
        )
      )
    )
  );

  postUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.PostUser),
      switchMap((response) =>
        this.userService.postUser(response.payload).pipe(
          map((users: IUser) => UserActions.PostUserSuccess({ payload: users })),
          catchError(errors => of(UserActions.PostUserFail({ errors }))),
        )
      )
    )
  );

  postUsersSuccess$ = createEffect(() =>
  this.actions$.pipe(
      ofType(UserActions.PostUserSuccess),
      tap(() => this.router.navigate(['/get-user']))
    ), { dispatch: false }
  );

}
