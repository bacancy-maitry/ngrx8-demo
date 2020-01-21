import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostUserComponent } from './post-user/post-user.component';
import { GetUserComponent } from './get-user/get-user.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/get-user',
    pathMatch: 'full'
  },
  {
    path: 'get-user',
    component: GetUserComponent
  },
  {
    path: 'post-user',
    component: PostUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
