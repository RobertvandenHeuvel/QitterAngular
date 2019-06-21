import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../_services';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  private currentUser: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authenticationService: AuthenticationService,
    private appComponent: AppComponent,
    private router: Router
    ) {}

  ngOnInit(){
    this.currentUser = this.appComponent.currentUser;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
