import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username: string = '';
  password: string = '';
  isLoginMode: boolean = true;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onToggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.isLoginMode) {
      if (this.authService.login(this.username, this.password)) {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Invalid credentials. Please try again.';
      }
    } else {
      if (this.authService.signup(this.username, this.password)) {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Username already exists. Please choose a different one.';
      }
    }
  }
}
