import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../_services/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  repositories;

  constructor(
    private repositoriesService: RepositoriesService
  ) { }

  ngOnInit() {
    this.getRepositories();
  }

  getRepositories(): void {
    this.repositoriesService.getRepositories()
      .subscribe(repositories => this.repositories = repositories);
  }
}
