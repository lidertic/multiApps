import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse
} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from '../../config/config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class LoginService {
  loginUrl = '/login';

  heroesUrl = '//localhost:3000/empresas1'; // URL to web api
  private urlService = Config.getEnvironmentVariable('endPoint');

  constructor(private http: HttpClient) {}

  /** POST: login { username, password }*/
  login(payload: any): Observable<any> {
    return this.http
      .post<any>(this.urlService + this.loginUrl, payload, httpOptions)
      .pipe(catchError(err => throwError(err)));
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
