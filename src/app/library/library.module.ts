import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { BookResultsComponent } from './book-results/book-results.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { LibraryComponent } from './library.component';

@NgModule({
  declarations: [LibraryComponent, BookSearchComponent, BookResultsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "", component: LibraryComponent, canActivate: [AuthGuard] }
    ])
  ]
})
export class LibraryModule {}
