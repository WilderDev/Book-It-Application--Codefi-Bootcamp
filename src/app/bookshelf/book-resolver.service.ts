import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Book } from '../shared/book/book.model';
import { BookshelfService } from './bookshelf.service';
import { HTTPService } from '../shared/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class BookResolverService implements Resolve<Book[]> {
  constructor(
    private bookshelfService: BookshelfService,
    private httpService: HTTPService
  ) {}

  resolve(): any {
    const books = this.bookshelfService.getBookshelfBooks();

    if (books.length === 0) {
      return this.httpService.fetchBooksFromFirebase();
    } else {
      return books;
    }
  }
}
