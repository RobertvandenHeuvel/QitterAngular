import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateUserComponent } from './create-user/create-user.component';



const routes: Routes = [
  {path: 'create-user', component: CreateUserComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: '', redirectTo: 'login-page', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
