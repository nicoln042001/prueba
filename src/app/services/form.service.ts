import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const BASE_URL= environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class FormService {

constructor(private http: HttpClient) { }
handleError(error: HttpErrorResponse){
  return throwError(error);
}

/**
 * Método que se conecta a api para guardar la información
 * @param body 
 * @returns 
 */
guardar(body:any):Observable<any>{
  return this.http.post<any>(`${BASE_URL}/api/Personas`, body).pipe(catchError(this.handleError));
}
}
