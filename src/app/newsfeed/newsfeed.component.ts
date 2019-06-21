import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  posts: Post[];
  isCollapsed: Boolean = true;
  private currentUser: any;


  constructor(
    private postService: PostService,
    private appComponent: AppComponent
    ) {
   }

  ngOnInit() {
    this.postService.list().subscribe(
      data => {
        data.sort((a , b) =>{
          return new Date(b.aanmaakDatum).getTime() - new Date(a.aanmaakDatum).getTime();
        })
        this.posts = data;
       
  })
  this.currentUser = this.appComponent.currentUser;
}

  bijVerandering(): void{
    this.isCollapsed = !this.isCollapsed;
  }


}
