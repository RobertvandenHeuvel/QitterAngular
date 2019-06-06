import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  private post:Post;
  private user: User;

  constructor(
    private postService: PostService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.userService.findById(1).subscribe(user => {
      this.user=user;
      console.log(user);
      console.log(this.user);
    });
    console.log(this.user);
    this.post = new Post();
    this.post.gebruiker = this.user;
    console.log(this.post.gebruiker);
    this.post.aanmaakDatum = new Date();
    this.post.postSoort = 0;
  }

  create(): void {
    this.postService.create(this.post).subscribe(() => {
      console.log("in de create post subscribe");
    });
  }

}
