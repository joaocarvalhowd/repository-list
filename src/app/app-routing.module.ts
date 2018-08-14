import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: RepositoryListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
