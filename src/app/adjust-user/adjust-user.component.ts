import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adjust-user',
  templateUrl: './adjust-user.component.html',
  styleUrls: ['./adjust-user.component.css']
})
export class AdjustUserComponent implements OnInit {
  private user: User;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.userService.findById(id).subscribe(user => {
      this.user=user;
    });
  }

  adjust(): void {
    this.userService.adjust(this.user).subscribe(() => {
      console.log("adjust is gedaan")
    });
  }

}
