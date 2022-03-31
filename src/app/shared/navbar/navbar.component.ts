import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() currPage = new EventEmitter();
  show = false;
  collapsed = true;

  constructor() {}

  ngOnInit(): void {}

  onNavItemClick(page: string) {
    this.currPage.emit(page);
  }
}
