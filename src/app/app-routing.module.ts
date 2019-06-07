import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AdjustUserComponent } from './adjust-user/adjust-user.component';
import { UsersComponent } from './users/users.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { AdjustPostComponent } from './adjust-post/adjust-post.component';



const routes: Routes = [
  {path: 'create-user', component: CreateUserComponent},
  {path: 'users', component: UsersComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'adjust-user', component: AdjustUserComponent},
  {path: 'adjust-user/:id', component: AdjustUserComponent},
  {path: 'show-user/:id', component: ShowUserComponent},
  {path: 'newsfeed', component: NewsfeedComponent,
  children: [
    {path: 'adjust-post/:id', component: AdjustPostComponent}
  ]
},
  {path: '', redirectTo: 'login-page', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
