import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  bookshelfBooks: Book[] = [];

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    // 1. Set the local "bookshelfBooks" array with the global "myBookshelfBooks" array via the "getBookshelfBooks" method
    this.bookshelfBooks = this.bookshelfService.getBookshelfBooks();

    // 2. Listening for any changes to the "myBookshelfBooks" array and updated our local "bookshelfBooks" array when that occurs
    this.bookshelfService.bookshelfBooksChanged.subscribe((updatedBooks) => {
      this.bookshelfBooks = updatedBooks;
    });
  }

  onRemoveBook(idx: number) {
    this.bookshelfService.deleteBookFromBookshelf(idx);
  }
}
