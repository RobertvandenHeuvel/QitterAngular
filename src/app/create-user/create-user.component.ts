import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  private user:User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
  }

  create(): void {
    this.userService.create(this.user).subscribe(() => {
      this.user = new User();
    });
  }

}
