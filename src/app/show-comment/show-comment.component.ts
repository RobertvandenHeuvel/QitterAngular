import { Component, OnInit, Input } from '@angular/core';
import { ReactieService } from '../reactie.service';
import { Reactie } from '../reactie';
import { Post } from '../post';

@Component({
  selector: 'show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit {
  @Input()post: Post;
  reacties: Reactie[];
  constructor(private reactieService: ReactieService) { }

  ngOnInit() {
        this.reacties = this.post.reacties;
        this.reacties.sort((a , b) =>{
          return new Date(b.aanmaakDatum).getTime() - new Date(a.aanmaakDatum).getTime();
        })
       console.log(this.reacties);
  }

}
