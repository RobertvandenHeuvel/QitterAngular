import { Component, OnInit } from '@angular/core';
import { Reactie } from '../reactie';
import { ReactieService } from '../reactie.service';
import { NewsfeedComponent } from '../newsfeed/newsfeed.component';

@Component({
  selector: 'create-reactie',
  templateUrl: './create-reactie.component.html',
  styleUrls: ['./create-reactie.component.css']
})
export class CreateReactieComponent implements OnInit {
  private reactie: Reactie;
  private commentBoolean: Boolean = false;

  constructor(
    private reactieService: ReactieService,
    private newsfeedComponent: NewsfeedComponent
  ) { }

  ngOnInit() {
    this.reactie = new Reactie();
  }

  createReactie(): void {
    this.reactie.aanmaakDatum = new Date();
    console.log(this.reactie);
    this.reactieService.create(this.reactie).subscribe(
      () => {
        this.bijComment();
        this.newsfeedComponent.ngOnInit();
        console.log("reactie is geplaatst");
      }
    );
  }

  bijComment(): void{
    this.commentBoolean = !this.commentBoolean;
  }
}
