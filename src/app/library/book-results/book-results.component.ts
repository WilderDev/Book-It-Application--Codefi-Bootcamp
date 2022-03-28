import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book/book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
})
export class BookResultsComponent implements OnInit {
  allLibraryResults: Book[] = [
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

  constructor() {}

  ngOnInit(): void {}
}
