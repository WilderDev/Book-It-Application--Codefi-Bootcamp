import { Component, OnInit, OnDestroy } from '@angular/core';
import { HTTPService } from '../http/http.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  collapsed = true;
  isAuthenticated = false;

  constructor(
    private httpService: HTTPService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.currUser.subscribe((user) => {
      this.isAuthenticated = !!user; // !! - Bang Bang => Boolean
    });
  }

  ngOnDestroy() {
    this.authService.currUser.unsubscribe();
  }

  onSaveData() {
    this.httpService.saveBooksToFirebase();
  }

  onFetchData() {
    this.httpService.fetchBooksFromFirebase().subscribe();
  }

  onSignOut() {
    this.authService.signOut();
  }
}
