import { Book } from '../../shared/book/book.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-bookshelf-editor',
  templateUrl: './bookshelf-editor.component.html',
  styleUrls: ['./bookshelf-editor.component.css'],
})
export class BookshelfEditorComponent implements OnInit {
  idx: number;
  isEditMode = false;

  bookDetails: Book = {
    title: 'Default Title',
    author: 'Test author',
    genre: '',
    coverImg: 'https://source.unsplash.com/500x500/?book',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookshelfService: BookshelfService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.isEditMode = params['id'] != null;

      if (this.isEditMode == true) {
        this.bookDetails = this.bookshelfService.getBookshelfBook(this.idx);
      }
    });
  }

  onBookFormSubmit(formObj: NgForm) {
    // Destructure the book properties from the "formObj"
    const { title, author, genre, coverImg } = formObj.value;

    // Set the local "bookDetails" object to the values from the "formObj"
    this.bookDetails = new Book(title, author, genre, coverImg);

    // Conditionally call different methods depending on what "mode" we are in
    if (this.isEditMode == true) {
      // Edit existing book (using the bookDetails)
      this.bookshelfService.updateBook(this.idx, this.bookDetails);
    } else {
      // Save a new book (using the bookDetails)
      this.bookshelfService.saveBookToBookshelf(this.bookDetails);
    }

    // Reset the form
    this.onResetForm();
  }

  onResetForm() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
