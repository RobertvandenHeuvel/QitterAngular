import { Component, OnInit } from '@angular/core';
import { Reactie } from '../reactie';
import { ReactieService } from '../reactie.service';
import { NewsfeedComponent } from '../newsfeed/newsfeed.component';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'create-reactie',
  templateUrl: './create-reactie.component.html',
  styleUrls: ['./create-reactie.component.css']
})
export class CreateReactieComponent implements OnInit {
  private reactie: Reactie;
  private user: User;
  private commentBoolean: Boolean = false;

  constructor(
    private reactieService: ReactieService,
    private userService: UserService,
    private newsfeedComponent: NewsfeedComponent
  ) { }

  ngOnInit() {
    this.reactie = new Reactie();
    // this.getUser();
  }

  createReactie(): void {
    this.reactie.aanmaakDatum = new Date();
    // this.reactie.gebruiker = this.user;
    // this.reactie.post.id = 1;
    console.log(this.reactie);
    this.reactieService.create(this.reactie).subscribe(
      () => {
        this.bijComment();
        this.newsfeedComponent.ngOnInit();
        console.log("reactie is geplaatst");
      }
    );
  }

  bijComment(): void{
    this.commentBoolean = !this.commentBoolean;
  }

  getUser(): void{
    this.userService.findById(1).subscribe(user => {
      this.user=user;
    });
  }
}
