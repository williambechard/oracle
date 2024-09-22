import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  private token: string | null = null;
  private apiUrl = 'http://localhost:5000'; // Assuming your Flask app runs on port 5000

  constructor(private http: HttpClient) {}

  login(email: string, apiKey: string): Observable<any> {
    return this.http.post('http://localhost:5000/login', { email, api: apiKey }).pipe(
      map((response: any) => {
        if (response && response.access_token) {
          this.token = response.access_token;
          this.isLoggedInSubject.next(true);
          return response;
        } else {
          throw new Error('Access token not found in response');
        }
      }),
      catchError(this.handleError)
    );
  }

  logout(): void {
    this.token = null;
    this.isLoggedInSubject.next(false);
  }

  getToken(): string | null {
    return this.token;
  }

  checkAuthStatus(): Observable<boolean> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<{is_authenticated: boolean}>('http://localhost:5000/status', { headers }).pipe(
      map(response => response.is_authenticated),
      tap((isAuthenticated: boolean) => {
        this.isLoggedInSubject.next(isAuthenticated);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown Error';
    if (error.status) {
      errorMessage = `Error: ${error.status}`;
    }
    console.error('Full error response:', error);
    return throwError(() => new Error(errorMessage));
  }

  ask(content: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/ask`, { content }, {
      headers: { 'Authorization': `Bearer ${this.getToken()}` }
    });
  }
 

}