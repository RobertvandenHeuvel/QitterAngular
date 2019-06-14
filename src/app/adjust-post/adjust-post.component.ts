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
      console.log(this.post);
    });
    this.posts = new Array;
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
}
