import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
})
export class BookshelfComponent implements OnInit {
  selectedBook: Book;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    // Subscribe to any changes in the global "selectedBook" emitter to update the  locally "selectedBook"
    this.bookshelfService.selectedBook.subscribe((currBook) => {
      this.selectedBook = currBook;
    });
  }
}
