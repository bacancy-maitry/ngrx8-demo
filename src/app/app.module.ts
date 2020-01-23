import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './_services/user.service';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GetUserComponent } from './get-user/get-user.component';
import { PostUserComponent } from './post-user/post-user.component';
import { reducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effect';
import { SharedModule } from './_shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GetUserComponent,
    PostUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ users: reducer }),
    EffectsModule.forRoot([UserEffects]),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 15 states
    }),
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
