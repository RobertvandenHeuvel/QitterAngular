import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';



const routes: Routes = [
  {path: 'create-user', component: CreateUserPageComponent},
  {path: '', redirectTo: 'create-user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
