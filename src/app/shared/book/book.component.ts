import { Component, Input, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookshelfService } from '../../bookshelf/bookshelf.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {}

  onSelectBook() {
    // Tell the "bookshelfService" what book was clicked
    this.bookshelfService.selectedBook.emit(this.book);
  }
}
