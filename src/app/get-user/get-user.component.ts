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
  public isLoading$ = true;

  constructor(private store: Store<fromUsers.State>,
              private spinnerComponent: SpinnerComponent) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.store.dispatch(fromUsers.GetUser());

    this.store.pipe(select(fromUsers.allUsers)).subscribe((response) => {
      // tslint:disable-next-line:no-string-literal
      this.isLoading$ = response['users'].isLoading;
      if (this.isLoading$) {
        this.spinnerComponent.startLoading();
      } else {
        // tslint:disable-next-line:no-string-literal
        this.userData$ = response['users'].data;
        this.spinnerComponent.stopLoading();
      }
    });
  }

}
