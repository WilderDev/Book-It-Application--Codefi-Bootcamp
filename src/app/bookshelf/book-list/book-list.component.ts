import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {
  private bookListSub: Subscription;
  bookshelfBooks: Book[] = [];
  sortField = 'author';

  constructor(
    private bookshelfService: BookshelfService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // 1. Set the local "bookshelfBooks" array with the global "myBookshelfBooks" array via the "getBookshelfBooks" method
    this.bookshelfBooks = this.bookshelfService.getBookshelfBooks();

    // 2. Listening for any changes to the "myBookshelfBooks" array and updated our local "bookshelfBooks" array when that occurs
    this.bookListSub = this.bookshelfService.bookshelfBooksChanged.subscribe(
      (updatedBooks) => {
        this.bookshelfBooks = updatedBooks;
      }
    );
  }

  ngOnDestroy(): void {
    this.bookListSub.unsubscribe();
  }

  onRemoveBook(idx: number) {
    this.bookshelfService.deleteBookFromBookshelf(idx);
  }

  onAddNewBook() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onSortBooks() {
    if (this.sortField === 'author') {
      this.sortField = 'title';
    } else {
      this.sortField = 'author';
    }
  }
}
