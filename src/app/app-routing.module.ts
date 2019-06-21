import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AdjustUserComponent } from './adjust-user/adjust-user.component';
import { UsersComponent } from './users/users.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { GroepenComponent } from './groepen/groepen.component';
import { AuthGuard } from './_helpers';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path: 'create-user', component: CreateUserComponent},
  {path: 'users', component: UsersComponent},
  {path: 'adjust-user', component: AdjustUserComponent},
  {path: 'adjust-user/:id', component: AdjustUserComponent},
  {path: 'show-user/:id', component: ShowUserComponent},
  {path: 'newsfeed', component: NewsfeedComponent},
  {path: 'create-group', component: CreateGroupComponent},
  {path: 'groepen', component: GroepenComponent},
  {path: '', redirectTo: 'newsfeed', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
