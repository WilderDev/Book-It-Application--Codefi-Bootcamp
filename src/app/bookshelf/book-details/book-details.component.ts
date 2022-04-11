import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  idx: number;
  book: Book;

  constructor(
    private bookshelfService: BookshelfService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.book = this.bookshelfService.getBookshelfBook(this.idx);
    });
  }

  onEditBook() {
    this.router.navigate(['../', this.idx, 'edit'], { relativeTo: this.route });
  }

  onDeleteBook() {
    this.bookshelfService.deleteBookFromBookshelf(this.idx);
    this.router.navigate(['/bookshelf']);
  }
}
