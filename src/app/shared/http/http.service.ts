import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookshelfService } from '../../bookshelf/bookshelf.service';
import { Book } from '../book/book.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  // *VARIABLES**
  firebaseRootURL = 'https://book-app-0-default-rtdb.firebaseio.com/books.json';

  // *INJECTIONS*
  constructor(
    private http: HttpClient,
    private bookshelfService: BookshelfService
  ) {}

  // *METHOD* - Save books to Firebase DB
  saveBooksToFirebase() {
    const books = this.bookshelfService.getBookshelfBooks();

    this.http
      .put(this.firebaseRootURL, books)
      .subscribe((booksFromFirebase: Book[]) => {
        console.log('Firebase DB Response:', booksFromFirebase);
      });
  }

  // *METHOD* - Fetch books from Firebase DB
  fetchBooksFromFirebase() {
    return this.http.get(this.firebaseRootURL, {}).pipe(
      tap((books: Book[]) => {
        this.bookshelfService.setBookshelfBooks(books);
      })
    );
  }
}
