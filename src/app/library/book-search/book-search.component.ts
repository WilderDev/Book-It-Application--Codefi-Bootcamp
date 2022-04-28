import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent implements OnInit {
  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {}

  onBookSearch(searchInput: string) {
    this.libraryService.onFetchBooks(searchInput);
  }
}
