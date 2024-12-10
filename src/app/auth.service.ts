import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { username: string, password: string }[] = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];

  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  signup(username: string, password: string): boolean {
    const userExists = this.users.some(u => u.username === username);
    if (!userExists) {
      this.users.push({ username, password });
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
