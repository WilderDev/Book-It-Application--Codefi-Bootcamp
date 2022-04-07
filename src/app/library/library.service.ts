import { Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root', // Provide in the root of our application
})
export class LibraryService {
  private allLibraryResults: Book[] = [
    new Book(
      "Harry Potter and the Sorcerer's Stone",
      'J.K. Rowling',
      'Fantasy',
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3._SY180_.jpg'
    ),
    new Book(
      'Harry Potter and the Chamber of Secrets',
      'J.K. Rowling',
      'Fantasy',
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474169725i/15881._SY180_.jpg'
    ),
    new Book(
      'Harry Potter and the Prisoner of Azkaban',
      'J.K. Rowling',
      'Fantasy',
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630547330i/5._SY180_.jpg'
    ),
  ];

  // Read
  getLibraryBooks() {
    return this.allLibraryResults.slice();
  }
}
