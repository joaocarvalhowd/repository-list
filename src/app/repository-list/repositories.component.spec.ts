import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from '../container/container.component';
import { RepositoryItemComponent } from '../repository-item/repository-item.component';
import { RepositoriesService } from '../_services/repositories.service';
import { RepositoriesMock } from './repositories.mock';

import { HeaderComponent } from '../header/header.component';
import { RepositoriesComponent } from './repositories.component';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';


describe('RepositoriesComponent', () => {
  let component: RepositoriesComponent;
  let fixture: ComponentFixture<RepositoriesComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;
  let repositoriesService: RepositoriesService;

  const mockRepositoriesService = {
    provide: RepositoriesService,
    useValue: {
      getRepositories: () => of(RepositoriesMock.data)
    }
  };

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ mockRepositoriesService, { provide: Router, useValue: mockRouter} ],
      declarations: [ RepositoriesComponent, ContainerComponent, RepositoryItemComponent, HeaderComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();

    repositoriesService = TestBed.get(RepositoriesService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesComponent);
    debugElement = fixture.debugElement;
    el = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have two repository-item', () => {
    const repositoryItems = el.querySelectorAll('.repository-item');
    expect(repositoryItems.length).toBe(2);
  });
});
