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

  // dochange(){
  //   //alert("you clicked me" );
  //   var choice=confirm("Confirm pop up box");
  //   var message;
  //   if(choice==true)
  //     message="you presed ok"
  //   else
  //     message="are you sure u want to cancel?";
  //   alert(message);
  // }

  delete(id: Number): void{
    var choice = confirm("Wilt u deze gebruiker verwijderen?");
    if(choice==true){
      this.userService.delete(id).subscribe(
      ()=> {this.ngOnInit()
      alert("Gebruiker met id " + id + " is verwijderd")}
      )
    }
  }

}
