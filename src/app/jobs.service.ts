import { ENV } from './app.settings';
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()
export class JobsService {
  constructor(private http: HttpClient) {}
  // get all Jobs
  getJobs(filterData?) {
    return this.http
      .post(`${ENV.BASE_API}jobs`, filterData)
      .pipe(catchError(this.handleError));
  }
  // get all Industries
  getIndustries() {
    return this.http
      .get(`${ENV.BASE_API}industries`)
      .pipe(catchError(this.handleError));
  }

    // get all States
    getStates() {
      return this.http
        .get(`${ENV.BASE_API}states`)
        .pipe(catchError(this.handleError));
    }

  // get all govt Jobs
  getGovtJobs() {
    return this.http
      .get(`${ENV.BASE_API}govt-jobs`)
      .pipe(catchError(this.handleError));
  }
  //User profile pic upload event
  public upload(formData) {
    return this.http
      .post(`${ENV.BASE_API}uploads`, formData)
      .pipe(catchError(this.handleError));
  }
  //User profile pic upload event
  public PostGovtJob(jobData) {
    return this.http
      .post(`${ENV.BASE_API}create-govt-jobs`, jobData)
      .pipe(catchError(this.handleError));
  }
  //delete event for remove lockers file
  public removeFile(file) {
    return this.http
      .delete(`${ENV.BASE_API}govt-jobs/remove-file`, {
        headers: new HttpHeaders().set("file", file)
      })
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return "Error: Unable to complete request. please try again later.";
  }
}
