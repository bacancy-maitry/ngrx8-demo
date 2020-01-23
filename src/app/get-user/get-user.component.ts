import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromUsers from '../store';
import { IUser } from '../_interfaces/user';
import { SpinnerComponent } from '../_shared/spinner/spinner.component';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss']
})
export class GetUserComponent implements OnInit {

  userData$: Array<IUser> = [];
  public isLoading$: boolean;
  public userId: number;

  constructor(private store: Store<fromUsers.AppState>,
              private spinnerComponent: SpinnerComponent) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.store.dispatch(fromUsers.GetUser());

    this.spinnerComponent.startLoading();
    this.store.pipe(select(fromUsers.loader)).subscribe((response) => {
      this.isLoading$ = response;
    });

    this.store.pipe(select(fromUsers.getAllUsers)).subscribe((response: IUser[]) => {
      console.log('response in get user:::', response);
      if (response) {
        this.userData$ = response;
        this.spinnerComponent.stopLoading();
      }
    });
  }

  getFirstTenUsers() {
    const data = this.store.pipe(select(fromUsers.firstTenUsers));
    data.subscribe((response) => {
      console.log('response', response);
    });
  }

  getUserById() {
    const data = this.store.pipe(select(fromUsers.getUserById(this.userId)));
    data.subscribe((response) => {
      console.log('response', response);
    });
  }

}
