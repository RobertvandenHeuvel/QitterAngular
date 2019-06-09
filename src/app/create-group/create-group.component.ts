import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { GroupService } from '../group.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  private group:Group;
  private users:User[];

  constructor(private groupService: GroupService, private userService: UserService) { }

  ngOnInit() {
    this.group = new Group();
    this.userService.list().subscribe(data => {
      this.users = data;
    });
  }

  create(): void {
    this.groupService.create(this.group).subscribe(group => {
      console.log(this.group);
      this.ngOnInit();    
    });
  }

}
