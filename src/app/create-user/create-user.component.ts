import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';
import { CheckCredentialsService } from '../check-credentials.service';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  private user:User;
  private currentUser: any;

  constructor(
    private userService: UserService,
    private appComponent: AppComponent,
    // private checkCredentialsService: CheckCredentialsService
    ) { }

  ngOnInit() {
    this.user = new User();
    // this.checkCredentialsService.checkCredentials(this.appComponent.currentUser);
    this.currentUser = this.appComponent.currentUser;
  }

  create(): void {
    this.userService.create(this.user).subscribe(() => {
      this.user = new User();
    });
  }

}
