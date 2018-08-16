import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private TOKEN_KEY = 'token';

  constructor() { }

  setAccessToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeAccessToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
