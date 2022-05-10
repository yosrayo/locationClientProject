import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Reclamation } from '../classes/reclamation';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

private BiensUrl = 'http://localhost:8181/api/biens';
constructor(private http: HttpClient) { }

create(reclamation: Reclamation): Observable<any> {
  return this.http.post<Reclamation>(this.BiensUrl, reclamation, httpOptions).pipe(
    tap((newBien: Reclamation) => console.log(`added bien w/ id=${newBien.id}`)),
    catchError(this.handleError<Reclamation>('create'))
  );
}


}
