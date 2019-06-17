import { Component, OnInit, Input } from '@angular/core';
import { Reactie } from '../reactie';
import { NewsfeedComponent } from '../newsfeed/newsfeed.component';
import { UserService } from '../user.service';
import { User } from '../user';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'create-reactie',
  templateUrl: './create-reactie.component.html',
  styleUrls: ['./create-reactie.component.css']
})
export class CreateReactieComponent implements OnInit {
  private reactie: Reactie;
  private commentBoolean: Boolean = false;
  @Input()private post: Post;
  private reacties: Reactie[];
  private user: User;

  constructor(
    private postService: PostService,
    private userService: UserService,
    private newsfeedComponent: NewsfeedComponent
  ) { }

  ngOnInit() {
    this.reactie = new Reactie();
    this.getUser();
    this.reacties = new Array;
    
  }

  createReactie(): void {
    this.reactie.aanmaakDatum = new Date();
    this.reactie.gebruiker = this.user;
    // this.reactie.post = this.post; --> deze zorgt voor een circular probleem. je voegt hier de post aan de reactie toe, maar dat doet de backend al voor ons.
    //door dat hier ook te doen creeer je dus de infinite loop. Vandaar dat deze is outcommentedtedt
    console.log(this.reactie);
    this.reacties.push(this.reactie);
    this.putPostReactie(this.reacties);
    
  }

  bijComment(): void{
    this.commentBoolean = !this.commentBoolean;
  }

  putPostReactie(reacties: Reactie[]):void{
    console.log("hoi");
    this.post.reacties = reacties;
    console.log(this.post.reacties);
    console.log(this.post);
    this.postService.adjust(this.post).subscribe(
    () => {
      this.bijComment();
      this.newsfeedComponent.ngOnInit();
      console.log("reactie is geplaatst");
    }
  );
  }

  getUser(): void{
    this.userService.findById(2).subscribe(user => {
      this.user=user;
    });
  }
}
