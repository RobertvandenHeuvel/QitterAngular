import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { GroupService } from '../group.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  private group:Group;
  private users:User[];
  private gebruiker:User;
  private gebruikersList:User[] = [];
  private currentUser: any;
  constructor(
    private groupService: GroupService,
    private userService: UserService,
    private appComponent: AppComponent
    ) { }

  ngOnInit() {
    this.group = new Group();
    this.getUsers();
    this.currentUser = this.appComponent.currentUser;
  }

  getUsers(): void{
    this.userService.list().subscribe(data => {
      this.users = data;
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  create(): void {
    // console.log(this.gebruiker);
    // console.log("voor " + this.gebruikersList);
    // this.gebruikersList.push(this.gebruiker);
    // console.log(this.gebruikersList);
    this.groupService.create(this.group).subscribe(group => {
      // console.log(this.group);
      for(let i=0;i<this.gebruikersList.length;i++){
        this.group.gebruikers.push(this.gebruikersList[i]);
      }
      // console.log(this.group);
      this.ngOnInit();    
    });
  }

  selectedUser (value: any) {
    console.log(value);
    this.userService.findById(value).subscribe(user => {
      this.gebruiker=user;
      console.log(user);
      console.log(this.gebruiker)
    });

  }
}
