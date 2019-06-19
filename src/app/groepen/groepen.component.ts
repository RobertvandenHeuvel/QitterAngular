import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { Group } from '../group';

@Component({
  selector: 'groepen',
  templateUrl: './groepen.component.html',
  styleUrls: ['./groepen.component.css']
})
export class GroepenComponent implements OnInit {
  private groepen: Group[];

  constructor(
    private groupService: GroupService
  ) { }

  ngOnInit() {
    this.groupService.list().subscribe(data => {
        this.groepen = data;
      });
      console.log(this.groepen);
  }

  delete(id: Number): void{
    var choice = confirm("Wilt u deze groep verwijderen?");
    if(choice==true){
      this.groupService.delete(id).subscribe(
      ()=> {this.ngOnInit()}
      )
    }
  }

}
