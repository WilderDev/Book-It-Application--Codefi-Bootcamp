import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root', // Provide in root of application
})
export class BookshelfService {
  selectedBook = new EventEmitter();
  bookshelfBooksChanged = new EventEmitter();

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
    this.bookshelfBooksChanged.emit(this.myBookshelfBooks.slice());
  }

  // Read
  getBookshelfBooks() {
    return this.myBookshelfBooks.slice();
  }

  // Delete
  deleteBookFromBookshelf(idx: number) {
    if (idx === -1) return; // If the myBookshelfBooks doesn't have a book at the index passed in => return

    this.myBookshelfBooks.splice(idx, 1);
    this.bookshelfBooksChanged.emit(this.myBookshelfBooks.slice());
  }
}
