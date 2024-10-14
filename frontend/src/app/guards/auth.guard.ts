import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '../services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private apiService: ApiService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.apiService.isLoggedIn$.pipe(
      tap(isAuthenticated => {
        console.log('isAuth ', isAuthenticated);
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
