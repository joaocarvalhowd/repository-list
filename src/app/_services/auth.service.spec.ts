import { TestBed, inject } from '@angular/core/testing';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let tokenService: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, TokenService]
    });

    authService = TestBed.get(AuthService);
    tokenService = TestBed.get(TokenService);

    const store = {};

    const mockLocalStorage = {
      getItem: (key: string) => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);

    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
  });

  it('should be authenticated', () => {
    tokenService.setAccessToken('sometoken');

    expect(authService.isAuthenticated()).toBeTruthy();
  });

  it('should not be authenticated', () => {
    expect(authService.isAuthenticated()).toBeFalsy();
  });
});
