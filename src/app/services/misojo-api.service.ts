import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ISignUpRequest } from '../models/sign-up-request.model';
import { IAuthenticationResponse } from '../models/authentication-response';

@Injectable({
  providedIn: 'root'
})
export class MisojoApiService {

  apiUrl:string = "https://misjo-backend-71ee817c137f.herokuapp.com/api"

  constructor(
    private httpClient: HttpClient
  ) { }

  signUp(request: ISignUpRequest): Observable<IAuthenticationResponse>{
    return this.httpClient
      .post<IAuthenticationResponse>(
        `${this.apiUrl}/users/`,
        request
      )
      .pipe(
        tap((response) => console.log(response)),
        catchError((error) => this.handleError(error))
      );
  }

  handleError(response: HttpErrorResponse) {
    if (response.status === 0 || response.status === 401) {
      console.log(response.error)
    }

    return throwError(response.error);
  }



}
