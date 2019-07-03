import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { GroupService } from '../group.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'show-group',
  templateUrl: './show-group.component.html',
  styleUrls: ['./show-group.component.css']
})
export class ShowGroupComponent implements OnInit {

  private groep: Group;

  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.groupService.findById(id).subscribe(groep => {
      console.log(groep.groepsNaam);
      this.groep=groep;
    });
  }

}
