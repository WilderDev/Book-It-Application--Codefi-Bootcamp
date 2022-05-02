import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authObs: Observable<AuthResData>;
  isSignInMode = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onToggleAuthMode() {
    this.isSignInMode = !this.isSignInMode;
  }

  onAuthFormSubmit(formObj: NgForm) {
    // Deconstruction of Values
    const { email, password } = formObj.value;

    // Validation Check
    if (!email || !password) return;

    // Conditional to see what "mode" we are in
    if (this.isSignInMode) {
      // Attempt: Sign In User
      this.authObs = this.authService.signIn(email, password);
    } else {
      // Attempt: Sign Up User
      this.authObs = this.authService.signUp(email, password);
    }

    // Observable Logic
    this.authObs.subscribe(
      (res) => {
        console.log('Auth Response SUCCESS:', res);
        this.router.navigate(['bookshelf']);
      },
      (err) => {
        console.log('Auth Response ERROR:', err);
      }
    );

    // Reset Form
    formObj.reset();
  }
}
