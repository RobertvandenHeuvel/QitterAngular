import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class CheckCredentialsService {
  private user: User = this.appComponent.currentUser;
  private url: String = "http://localhost:8082/api";
  private endpoint: String = "checkCredentials";

  constructor(
    private httpClient: HttpClient,
    private appComponent: AppComponent
    ) { }

  checkCredentials(user: User): void{
    this.httpClient.get<User>(`${this.url}/${this.endpoint}`);
    if(this.user.token == user.token){
      console.log("gebruiker heeft de juiste token");
    }
    else{
      console.log("verkeerde token");
    }
  }

}
