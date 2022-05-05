import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [BookComponent, DropdownDirective],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [CommonModule, FormsModule, BookComponent, DropdownDirective]
})
export class SharedModule {}
