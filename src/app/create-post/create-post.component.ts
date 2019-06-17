import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { User } from '../user';
import { UserService } from '../user.service';
import { NewsfeedComponent } from '../newsfeed/newsfeed.component';

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  private post:Post;
  private user: User;
  private posts: Post[];

  constructor(
    private userService: UserService,
    private newsfeedComponent: NewsfeedComponent
    ) { }

  ngOnInit() {
    this.post = new Post();
    this.posts = new Array;
    this.getUser();
  }

  create(): void {
    this.post.aanmaakDatum = new Date();
    this.post.postSoort = 0;
    this.posts.push(this.post);
    this.putUser(this.posts);
       this.ngOnInit();      
    };
  
  getUser(): void{
      this.userService.findById(1).subscribe(user => {
        this.user=user;
      });
    }
    
    putUser(posts: Post[]):void{
      this.user.posts = posts;
      this.userService.adjust(this.user).subscribe(() =>{
        this.newsfeedComponent.ngOnInit();
      });
    }
  
  }

