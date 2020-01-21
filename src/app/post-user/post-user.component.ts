import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUsers from '../store';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.scss']
})
export class PostUserComponent implements OnInit {

  isLoading: boolean;
  userForm: FormGroup;

  constructor(private store: Store<fromUsers.State>,
              private fb: FormBuilder) {
                this.createForm();
              }

  ngOnInit() {}

  createForm() {
    this.userForm = this.fb.group({
      userId: [101],
      id: [101],
      title: ['Title'],
      body: ['Body']
    });
  }

  postUser() {
    this.store.dispatch(fromUsers.PostUser({ payload: this.userForm.value }));
  }

}
