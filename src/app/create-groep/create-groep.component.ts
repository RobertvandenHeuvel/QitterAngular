import { Component, OnInit } from '@angular/core';
import { Groep } from '../groep';
import { User } from '../user';
import { UserService } from '../user.service';
import { GroepService } from '../groep.service';

@Component({
  selector: 'create-groep',
  templateUrl: './create-groep.component.html',
  styleUrls: ['./create-groep.component.css']
})
export class CreateGroepComponent implements OnInit {
  private groep:Groep;
  private users:User[];
  private gebruiker:User;
  private gebruikersList:User[] = [];
  constructor(private groepService: GroepService, private userService: UserService) { }

  ngOnInit() {
    this.groep = new Groep();
    this.getUsers();
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
    console.log(this.gebruiker);
    console.log("voor " + this.gebruikersList);
    this.gebruikersList.push(this.gebruiker);
    console.log(this.gebruikersList);
    this.groepService.create(this.groep).subscribe(groep => {
      console.log(this.groep);
      for(let i=0;i<this.gebruikersList.length;i++){
      this.groep.gebruikers.push(this.gebruikersList[i]);
      }
      console.log(this.groep);
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
