import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdjustUserComponent } from './adjust-user/adjust-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AdjustPostComponent } from './adjust-post/adjust-post.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUserComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    AdjustUserComponent,
    ShowUserComponent,
    NewsfeedComponent,
    CreatePostComponent,
    AdjustPostComponent,
    CreateGroupComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
