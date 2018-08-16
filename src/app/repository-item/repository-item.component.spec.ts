import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { RepositoryItemComponent } from './repository-item.component';

describe('RepositoryItemComponent', () => {
  let component: RepositoryItemComponent;
  let fixture: ComponentFixture<RepositoryItemComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryItemComponent);
    debugElement = fixture.debugElement;
    el = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
  });

  it('Create with all parameters', () => {
    component.repository = {
      name: 'test',
      description: 'test-description',
      language: 'Javascript',
      stargazers_count: 10,
      forks_count: 5,
      html_url: 'https://github.com/joaocarvalhowd/test'
    };

    fixture.detectChanges();

    const url = el.querySelector(('.repository-item')).getAttribute('href');
    const title = el.querySelector(('.repository-item h2'));
    const description = el.querySelector(('.repository-item p'));
    const language = el.querySelector(('.repository-item__counts__item--language span'));
    const stars = el.querySelector(('.repository-item__counts__item--stars span'));
    const forks = el.querySelector(('.repository-item__counts__item--forks span'));

    expect(url).toBe('https://github.com/joaocarvalhowd/test');
    expect(title.innerHTML).toBe('test');
    expect(description.innerHTML).toBe('test-description');
    expect(language.innerHTML.trim()).toBe('Javascript');
    expect(stars.innerHTML.trim()).toBe('10');
    expect(forks.innerHTML.trim()).toBe('5');
  });

  it('Create without language', () => {
    component.repository = {
      name: 'test',
      description: 'test-description',
      language: null,
      stargazers_count: 10,
      forks_count: 5,
      html_url: 'https://github.com/joaocarvalhowd/test'
    };

    fixture.detectChanges();

    const url = el.querySelector(('.repository-item')).getAttribute('href');
    const title = el.querySelector(('.repository-item h2'));
    const description = el.querySelector(('.repository-item p'));
    const language = el.querySelector(('.repository-item__counts__item--language span'));
    const stars = el.querySelector(('.repository-item__counts__item--stars span'));
    const forks = el.querySelector(('.repository-item__counts__item--forks span'));

    expect(url).toBe('https://github.com/joaocarvalhowd/test');
    expect(title.innerHTML).toBe('test');
    expect(description.innerHTML).toBe('test-description');
    expect(language).toBeNull();
    expect(stars.innerHTML.trim()).toBe('10');
    expect(forks.innerHTML.trim()).toBe('5');
  });
});
