import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.list().subscribe(
      data => {
        this.posts = data;
      });
  }

  delete(id: Number): void{
    var choice = confirm("Wilt u deze post verwijderen?");
    if(choice==true){
      this.postService.delete(id).subscribe(
      ()=> {this.ngOnInit()
      alert("Post met id " + id + " is verwijderd")}
      )
    }
  }

}
