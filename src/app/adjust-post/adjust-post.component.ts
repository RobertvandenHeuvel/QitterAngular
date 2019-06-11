import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { NewsfeedComponent } from '../newsfeed/newsfeed.component';

@Component({
  selector: 'adjust-post',
  templateUrl: './adjust-post.component.html',
  styleUrls: ['./adjust-post.component.css']
})
export class AdjustPostComponent implements OnInit {
  private post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private newsfeedComponent: NewsfeedComponent
    ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.postService.findById(id).subscribe(post => {
      this.post=post;
    });
  }

  adjust(): void {
    this.postService.adjust(this.post).subscribe(() => {
      this.newsfeedComponent.ngOnInit();
      this.newsfeedComponent.bijVerandering();
      console.log("adjust is gedaan")
    });
  }
}
