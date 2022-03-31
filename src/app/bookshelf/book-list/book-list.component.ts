import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../../shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Output() currBook = new EventEmitter<Book>();

  myBookshelfBooks: Book[] = [
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

  constructor() {}

  ngOnInit(): void {}

  handleBookSelect(book: Book) {
    this.currBook.emit(book);
  }
}
