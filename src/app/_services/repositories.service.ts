import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private http: HttpClient, private router: Router) { }

  getRepositories (): Observable<any> {
    const HTTP_OPTIONS = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get('https://api.github.com/user/repos', HTTP_OPTIONS)
      .pipe(
        tap(repositories => console.log('fetched repositories')),
        catchError(this.handleError('getRepositories', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);

      console.error(error);

      if (error.status === 401) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }

      return of(result as T);
    };
  }

}
