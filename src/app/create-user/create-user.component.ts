import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Groep } from '../groep';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  private user:User;
  private groep:Groep;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.groep = new Groep();
  }

  create(): void {
    console.log(this.groep);
    console.log(this.user.groep);
    this.user.groep.push(this.groep);
    this.createUser(this.user);
    
  }
  createUser(gebruiker):void{
    this.userService.create(gebruiker).subscribe(() => {
      this.user = new User();
      console.log(this.user.groep);
    });
  }

}
