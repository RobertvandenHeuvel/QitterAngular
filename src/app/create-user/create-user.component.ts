import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';

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
    private appComponent: AppComponent
    ) { }

  ngOnInit() {
    this.user = new User();
    this.currentUser = this.appComponent.currentUser;
  }

  create(): void {
    this.userService.create(this.user).subscribe(() => {
      this.user = new User();
    });
  }

}
