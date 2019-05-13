import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class JobsService {

  constructor(private http: HttpClient) { }
  // get all Jobs
  getJobs(filterData?) {
    return this.http
      .post(`http://3.86.159.151:5000/v1/jobs`, filterData)
      .pipe(
        catchError(this.handleError)
      );
  } private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return  'Error: Unable to complete request. please try again later.'
  };
}
