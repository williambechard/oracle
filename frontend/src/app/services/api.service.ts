import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  private token: string | null = null;
  private apiUrl =  '';



  constructor(private http: HttpClient, private platform: Platform) {
    if (this.platform.ANDROID || this.platform.IOS) this.apiUrl = 'http://10.0.2.2:5001';
     else this.apiUrl = 'http://localhost:5001';
  }

  login(email: string, apiKey: string): Observable<any> {
    return this.http.post('https://api.asksage.ai/user/get-token-with-api-key', { email, 'api_key': apiKey }).pipe(
      map((data: any) => {
        console.log('response ', data);
        if (data && data.response.access_token) {
          this.token = data.response.access_token;
          this.isLoggedInSubject.next(true);

          //successful login, so store email and api-key securely locally to be used for auto-login
          localStorage.setItem('email', email);
          localStorage.setItem('api-key', apiKey);

          return data.response;
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


  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown Error';
    if (error.status) {
      errorMessage = `Error: ${error.status}`;
    }
    console.error('Full error response:', error);
    return throwError(() => new Error(errorMessage));
  }

ask(content: { message: string; persona?: string; system_prompt?: string; dataset?: string; limit_references?: number; temperature?: number; live?: number; model?: string }): Observable<any> {
    const token = this.getToken();
    console.log('Token:', token); // Log the token for debugging

    if (!token) {
      throw new Error('Token is missing');
    }

    return this.http.post('https://api.asksage.ai/server/query', content, {
      headers: { 'x-access-tokens': token }
    }).pipe(
      catchError(this.handleError)
    );
  }





}
