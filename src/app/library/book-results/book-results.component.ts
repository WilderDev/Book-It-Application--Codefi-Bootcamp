import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { BookshelfService } from '../../bookshelf/bookshelf.service';
import { Book } from '../../shared/book/book.model';
import { LibraryService } from '../library.service';

@Component({
  selector: "app-book-results",
  templateUrl: "./book-results.component.html",
  styleUrls: ["./book-results.component.css"],
  animations: [
    trigger("swoopIn", [
      state(
        "in",
        style({
          transform: "scale(1)",
          opacity: 1
        })
      ),
      transition(":enter", [
        animate(
          "1s",
          keyframes([
            style({
              transform: "scale(0)",
              opacity: 0,
              offset: 0
            }),
            style({
              transform: "scale(0.2)",
              opacity: 0.2,
              offset: 0.2
            }),
            style({
              transform: "scale(0.4)",
              opacity: 0.4,
              offset: 0.4
            }),
            style({
              transform: "scale(0.6)",
              opacity: 0.6,
              offset: 0.6
            }),
            style({
              transform: "scale(0.8)",
              opacity: 0.8,
              offset: 0.8
            }),
            style({
              transform: "scale(1)",
              opacity: 1,
              offset: 1
            })
          ])
        )
      ])
    ])
  ]
})
export class BookResultsComponent implements OnInit {
  libraryBooks: Book[] = [];

  constructor(
    private libraryService: LibraryService,
    private bookshelfService: BookshelfService
  ) {}

  ngOnInit(): void {
    // Update local "libraryBooks" with global "allLibraryResults" array
    this.libraryBooks = this.libraryService.getLibraryBooks();

    // Subscribe to the Subject that emits when the global "allLibraryResults" array changes
    this.libraryService.apiBooksChanged.subscribe((updatedBooks: Book[]) => {
      this.libraryBooks = updatedBooks;
    });
  }

  onAddToBookshelf(book: Book) {
    // Saves the book from the library page to the bookshelf page
    this.bookshelfService.saveBookToBookshelf(book);
  }
}
