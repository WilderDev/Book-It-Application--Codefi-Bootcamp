import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form-td',
  templateUrl: './book-form-td.component.html',
  styleUrls: ['./book-form-td.component.css'],
})
export class BookFormTdComponent implements OnInit {
  formHasBeenSubmitted = false;
  bookDetails = {
    title: '',
    author: '',
    genre: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(formObj: NgForm) {
    // console.log('Form Submit Success!', formObj);

    // Update boolean variable to true
    this.formHasBeenSubmitted = true;

    // Set Local "bookDetails" object to the values on the form inputs
    this.bookDetails.title = formObj.value.title;
    this.bookDetails.author = formObj.value.author;
    this.bookDetails.genre = formObj.value.genre;

    // Reset the form
    formObj.reset();
  }
}
