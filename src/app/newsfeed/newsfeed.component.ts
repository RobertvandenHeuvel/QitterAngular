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
  console.log("joe anja");
}

  delete(id: Number): void{
    var choice = confirm("Wilt u deze post verwijderen?");
    if(choice==true){
      this.postService.delete(id).subscribe(
      ()=> {this.ngOnInit()}
      )
    }
  }

  bijVerandering(): void{
    this.isCollapsed = !this.isCollapsed;
  }

}
