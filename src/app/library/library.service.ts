import { Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: "root" // Provide in the root of our application
})
export class LibraryService {
  apiBooksChanged = new Subject<Book[]>();

  private allLibraryResults: Book[] = [];

  constructor(private http: HttpClient) {}

  // Read
  getLibraryBooks() {
    return this.allLibraryResults.slice();
  }

  onFetchBooks(query: string) {
    // Turn Search Query into lowercase words with plus sign for spaces
    const formattedQuery = query
      .split(" ")
      .join("+")
      .toLowerCase();

    // Send HTTP GET Request to the "openLibrary" api endpoint using the tranformed input query
    this.http
      .get(`https://openlibrary.org/search.json?q=${formattedQuery}`)
      .subscribe((searchResults: any) => {
        const bestMatches = searchResults.docs.slice(0, 7);

        this.saveBooksToGlobalArray(bestMatches);
      });
  }

  saveBooksToGlobalArray(books) {
    books.map(book => {
      const formattedBook = new Book(
        book.title,
        book.author_name ? book.author_name[0] : "unknown",
        "unknown",
        "https://tse2.mm.bing.net/th?id=OIP.I6LGwie40Vw4K8gmV52MKwHaLc&pid=Api&P=0&w=300&h=300"
      );
      this.allLibraryResults.push(formattedBook);
    });

    this.apiBooksChanged.next(this.allLibraryResults.slice());
  }
}
