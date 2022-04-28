import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book/book.model';
import { LibraryService } from '../library.service';
import { BookshelfService } from '../../bookshelf/bookshelf.service';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
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
