import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // Inject Packages
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // Bind the "class.show" to the "isOpen" variable
  @HostBinding('class.show') isOpen = false;

  // Click Listener to toggle the "isOpen" boolean
  @HostListener('click') toggleOpen() {
    // Toggle "isOpen"
    this.isOpen = !this.isOpen;

    // Grab the "dropdown-menu" div
    const dropdownList =
      this.elRef.nativeElement.querySelector('.dropdown-menu');

    // Conditionally add/remove the "show" class on the "dropdown-menu"
    if (this.isOpen) {
      this.renderer.addClass(dropdownList, 'show');
    } else {
      this.renderer.removeClass(dropdownList, 'show');
    }
  }
}
