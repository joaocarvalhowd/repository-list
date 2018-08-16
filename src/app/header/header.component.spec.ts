import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TokenService } from '../_services/token.service';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';
import { ContainerComponent } from '../container/container.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement: DebugElement;
  let tokenService: TokenService;
  let removeTokenAccessSpy;

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: mockRouter}, TokenService],
      declarations: [ HeaderComponent, ContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    debugElement = fixture.debugElement;

    tokenService = debugElement.injector.get(TokenService);

    removeTokenAccessSpy = spyOn(tokenService, 'removeAccessToken').and.callThrough();
  });

  describe('Logout', () => {
    beforeEach(() => {
      tokenService.setAccessToken('sometoken');
    });

    it('should call remove token access on the service', () => {
      debugElement
        .query(By.css('.header__logout'))
        .triggerEventHandler('click', null);

      expect(tokenService.getAccessToken()).toBeNull();
      expect(removeTokenAccessSpy).toHaveBeenCalled();
    });

    it('should call remove token access on the service and redirect to `/login`', () => {
      debugElement
        .query(By.css('.header__logout'))
        .triggerEventHandler('click', null);

      expect(tokenService.getAccessToken()).toBeNull();
      expect(removeTokenAccessSpy).toHaveBeenCalled();
      expect (mockRouter.navigate).toHaveBeenCalledWith (['/login']);
    });
  });
});
