import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  isLoggedIn = false;
  token: string;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  // login(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(val => this.isLoggedIn = true)
  //   );
  // }

  logout(): void {
    this.isLoggedIn = false;
    this.token = null;
  }
}
