import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { NewsfeedComponent } from '../newsfeed/newsfeed.component';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'adjust-post',
  templateUrl: './adjust-post.component.html',
  styleUrls: ['./adjust-post.component.css']
})
export class AdjustPostComponent implements OnInit {
  @Input() post: Post;
  private user: User;
  private posts: Post[];
  private reacties: Post[];
  private reactie: Post;
  private isChanging: Boolean = false;
  private postValue: String;
  private commentBoolean: Boolean = false;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private newsfeedComponent: NewsfeedComponent,
    private userService: UserService
    ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.postService.findById(id).subscribe(post => {
      this.post=post;
      console.log(this.post);
    });
    this.posts = new Array;
    this.reacties = new Array;
    this.postValue = this.post.tekst;
  }

  putUser(posts: Post[]):void{
    this.user.posts = posts;
    this.userService.adjust(this.user).subscribe(() =>{
      this.newsfeedComponent.ngOnInit();
      this.newsfeedComponent.bijVerandering();
    });
  }

  getUser(): void{
    this.user = new User();
    this.userService.findById(1).subscribe(user => {
      this.user=user;
      this.create();
    });
  }
  create(): void {
    this.posts.push(this.post);
    this.putUser(this.posts);
  }

  bijVerandering(): void{
    this.post.tekst = this.postValue;
    this.isChanging = !this.isChanging;
  }

  delete(id: Number): void{
    var choice = confirm("Wilt u deze post verwijderen?");
    if(choice==true){
      this.postService.delete(id).subscribe(
      ()=> {
        this.newsfeedComponent.ngOnInit();
      }
      )
    }
  }

  bijComment(): void{
    this.commentBoolean = !this.commentBoolean;
  }

  createReactie(): void {
    this.reacties.push(this.reactie);
    this.putPost(this.reacties);
  }

  putPost(reacties: Post[]):void{
    this.post.reacties = reacties;
    this.postService.adjust(this.post).subscribe(() =>{
      // this.newsfeedComponent.ngOnInit();
      // this.newsfeedComponent.bijVerandering();
      console.log("in putPost methode");
    });
  }

}
