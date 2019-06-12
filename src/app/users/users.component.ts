import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.list().subscribe(data => {
      this.users = data;
    });
  }

  delete(id: Number): void{
    var choice = confirm("Wilt u deze gebruiker verwijderen?");
    if(choice==true){
      this.userService.delete(id).subscribe(
      ()=> {this.ngOnInit()}
      )
    }
  }

}
