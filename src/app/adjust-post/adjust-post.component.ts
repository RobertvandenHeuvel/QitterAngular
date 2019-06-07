import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adjust-post',
  templateUrl: './adjust-post.component.html',
  styleUrls: ['./adjust-post.component.css']
})
export class AdjustPostComponent implements OnInit {
  // private post: Post;

  constructor(
  //   private postService: PostService,
  //   private route: ActivatedRoute
    ) { }

  ngOnInit() {
  //   const id = +this.route.snapshot.params["id"];
  //   this.postService.findById(id).subscribe(post => {
  //     this.post=post;
  //   });
  }

  // adjust(): void {
  //   this.postService.adjust(this.post).subscribe(() => {
  //     console.log("adjust is gedaan")
  //   });
  // }
}
