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
  }

  onAddToBookshelf(book: Book) {
    // Saves the book from the library page to the bookshelf page
    this.bookshelfService.saveBookToBookshelf(book);
    // Sends book data to the saveBook Subject
    this.bookshelfService.saveBookSubject.next(book);
  }
}
