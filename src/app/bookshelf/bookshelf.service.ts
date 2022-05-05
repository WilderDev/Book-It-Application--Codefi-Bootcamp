import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: "root" // Provide in root of application
})
export class BookshelfService {
  selectedBook = new Subject<Book>();
  bookshelfBooksChanged = new Subject<Book[]>();

  private myBookshelfBooks: Book[] = [];

  // CREATE (one)
  saveBookToBookshelf(book: Book) {
    this.myBookshelfBooks.push(book);
    this.selectedBook.next(book);
    this.bookshelfBooksChanged.next(this.myBookshelfBooks.slice());
  }

  // READ (many)
  getBookshelfBooks() {
    return this.myBookshelfBooks.slice();
  }

  // READ (one)
  getBookshelfBook(idx: number) {
    return this.myBookshelfBooks.slice()[idx];
  }

  // UPDATE (one)
  updateBook(index: number, updatedBookDetails: Book) {
    this.myBookshelfBooks[index] = updatedBookDetails;
    this.bookshelfBooksChanged.next(this.myBookshelfBooks.slice());
  }

  // UPDATE (many)
  setBookshelfBooks(bookArr: Book[] = []) {
    this.myBookshelfBooks = bookArr;
    this.bookshelfBooksChanged.next(this.myBookshelfBooks.slice());
  }

  // DELETE (one)
  deleteBookFromBookshelf(idx: number) {
    if (idx === -1) return; // If the myBookshelfBooks doesn't have a book at the index passed in => return

    this.selectedBook.next(this.myBookshelfBooks[idx]);

    this.myBookshelfBooks.splice(idx, 1);

    this.bookshelfBooksChanged.next(this.myBookshelfBooks.slice());
  }
}
