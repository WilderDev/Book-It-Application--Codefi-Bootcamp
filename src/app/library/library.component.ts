import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { BookshelfService } from '../bookshelf/bookshelf.service';
import { Book } from '../shared/book/book.model';

@Component({
  selector: "app-library",
  templateUrl: "./library.component.html",
  styleUrls: ["./library.component.css"]
})
export class LibraryComponent implements OnInit, OnDestroy {
  private selectedBookSub: Subscription;
  alert: string;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.selectedBookSub = this.bookshelfService.selectedBook.subscribe(
      (book: Book) => {
        this.alert = `Successfully added ${book.title} by ${book.author}!`;
      }
    );
  }

  ngOnDestroy(): void {
    this.selectedBookSub.unsubscribe();
  }

  handleCloseModal() {
    this.alert = null;
  }
}
