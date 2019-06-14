import { Component, OnInit } from '@angular/core';
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
  private post:Post;
  private user: User;
  private posts: Post[];

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
    });
    this.posts = new Array;
    this.getUser();
  }

  adjust(): void {
    this.postService.adjust(this.post).subscribe(() => {
      this.newsfeedComponent.ngOnInit();
      this.newsfeedComponent.bijVerandering();
      console.log("adjust is gedaan")
    });
  }

  putUser(posts: Post[]):void{
    this.user.posts = posts;
    this.userService.adjust(this.user).subscribe(() =>{
    });
  }

  getUser(): void{
    this.user = new User();
    this.userService.findById(5).subscribe(user => {
      this.user=user;
      this.create();
    });
  }
  create(): void {
    this.post.aanmaakDatum = new Date();
    this.post.postSoort = 0;
    this.posts.push(this.post);
    this.putUser(this.posts);
  }
}
