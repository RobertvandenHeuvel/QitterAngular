import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { GroupService } from '../group.service';

@Component({
  selector: 'create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  private group:Group;
  
  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.group = new Group();
  }

  create(): void {
    this.groupService.create(this.group).subscribe(group => {
      console.log(this.group);
      this.ngOnInit();    
    });
  }

}
