import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpTokenService {
  constructor(private http: HttpClient) {}
  requestCount = 0;

  static handleError(error: HttpErrorResponse) {
    let msg = '';

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
      if ('' + error.name === 'TimeoutError') {
        msg +=
          ' Timeout Error: ' + (error.error ? error.error.message : '') + '.';
      }
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.' + msg);
  }

  public get(uri: string, showSpinner = true, options?: any): Observable<any> {
    //this.showLoader(showSpinner);
    const request$ = this.http.get(this.buildUrl(uri), options);
    return this.handle(request$, showSpinner);
  }

  public post(uri: string, body: any, showSpinner = true): Observable<any> {
    //this.showLoader(showSpinner);
    const request$ = this.http.post(this.buildUrl(uri), body);
    return this.handle(request$, showSpinner);
  }

  public put(uri: string, body: any, showSpinner = true): Observable<any> {
    //this.showLoader(showSpinner);
    const request$ = this.http.put(this.buildUrl(uri), body);
    return this.handle(request$, showSpinner);
  }

  public delete(uri: string, showSpinner = true): Observable<any> {
    //this.showLoader(showSpinner);
    const request$ = this.http.delete(this.buildUrl(uri));
    return this.handle(request$, showSpinner);
  }

  private handle(request$: Observable<any>, hasSpinner: boolean) {
    return request$.pipe(
      catchError(HttpTokenService.handleError), // then handle the error
      finalize(() => {})
    );
  }

  private buildUrl(uri: string): string {
    return uri;
  }
}
