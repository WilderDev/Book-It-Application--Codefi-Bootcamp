import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root', // Provide in root of application
})
export class BookshelfService {
  bookshelfBooksChanged = new Subject<Book[]>();
  saveBookSubject = new Subject<Book>();

  private myBookshelfBooks: Book[] = [
    new Book(
      'The Pragmatic Programmer',
      'Andrew Hunt',
      'Non-Fiction',
      'https://images-na.ssl-images-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg'
    ),
    new Book(
      'Code Complete v2',
      'Steve McConnell',
      'Non-Fiction',
      'https://images-na.ssl-images-amazon.com/images/I/41nvEPEagML._SX408_BO1,204,203,200_.jpg'
    ),
    new Book(
      'Eloquent JavaScript v3',
      'Marjin Haverbeke',
      'Non-Fiction',
      'https://eloquentjavascript.net/img/cover.jpg'
    ),
  ];

  // Create
  saveBookToBookshelf(book: Book) {
    this.myBookshelfBooks.push(book);
    this.bookshelfBooksChanged.next(this.myBookshelfBooks.slice());
  }

  // Read All
  getBookshelfBooks() {
    return this.myBookshelfBooks.slice();
  }

  // Read One
  getBookshelfBook(idx: number) {
    return this.myBookshelfBooks.slice()[idx];
  }

  // Delete
  deleteBookFromBookshelf(idx: number) {
    if (idx === -1) return; // If the myBookshelfBooks doesn't have a book at the index passed in => return

    this.myBookshelfBooks.splice(idx, 1);
    this.bookshelfBooksChanged.next(this.myBookshelfBooks.slice());
  }
}
