import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
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
import { CreateReactieComponent } from './create-reactie/create-reactie.component';
import { ShowCommentComponent } from './show-comment/show-comment.component';
import { GroepenComponent } from './groepen/groepen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { ShowGroupComponent } from './show-group/show-group.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUserComponent,
    PageNotFoundComponent,
    AdjustUserComponent,
    ShowUserComponent,
    NewsfeedComponent,
    CreatePostComponent,
    AdjustPostComponent,
    CreateGroupComponent,
    MainNavComponent,
    CreateReactieComponent,
    ShowCommentComponent,
    GroepenComponent,
    LoginComponent,
    RegisterComponent,
    ShowGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
