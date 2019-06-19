import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  posts: Post[];
  isCollapsed: Boolean = true;

  constructor(private postService: PostService) {
   }

  ngOnInit() {
    this.postService.list().subscribe(
      data => {
        data.sort((a , b) =>{
          return new Date(b.aanmaakDatum).getTime() - new Date(a.aanmaakDatum).getTime();
        })
        this.posts = data;
  })
}
  bijVerandering(): void{
    this.isCollapsed = !this.isCollapsed;
  }

}
