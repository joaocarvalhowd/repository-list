import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenService]
    });

    service = TestBed.get(TokenService);

    const store = {};

    const mockLocalStorage = {
      getItem: (key: string) => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);

    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);

    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
  });

  it('should created the service', () => {
    expect(service).toBeTruthy();
  });

  describe('setAccessToken', () => {
    it('should store the token in localStorage', () => {
        service.setAccessToken('sometoken');
        expect(service.getAccessToken()).toEqual('sometoken');
      });
  });

  describe('removeAccessToken', () => {
    beforeEach(() => {
      service.setAccessToken('sometoken');
    });

    it('should store and later remove the token in localStorage', () => {
      service.removeAccessToken();
      expect(service.getAccessToken()).toEqual(null);
    });
  });

  describe('getAccessToken', () => {
    it('should get the token in localStorage', () => {
      service.setAccessToken('sometoken');
      expect(service.getAccessToken()).toEqual('sometoken');
    });
  });
});
