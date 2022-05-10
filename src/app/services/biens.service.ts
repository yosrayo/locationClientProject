import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Biens } from '../classes/biens';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BiensService {

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
  getBiens (): Observable<Biens[]> {
    return this.http.get<Biens[]>(this.BiensUrl).pipe(
      tap(_ => console.log('fetched Biens')),
      catchError(this.handleError<Biens[]>('getBiens', []))
    );
  }

  getbiensId(id:number){
    return this.http.get(this.BiensUrl+'/'+id)
  }
  
  create(bien: Biens): Observable<any> {
    return this.http.post<Biens>(this.BiensUrl, bien, httpOptions).pipe(
      tap((newBien: Biens) => console.log(`added bien w/ id=${newBien.id}`)),
      catchError(this.handleError<Biens>('create'))
    );
  }
  update(biens: Biens | number): Observable<Biens> {
    return this.http.put<Biens>(this.BiensUrl, biens, httpOptions).pipe(
      tap((newBiens: Biens) => console.log(`updeted bien w/ id=${newBiens.id}`)),
      catchError(this.handleError<Biens>('create'))
    );
  }

  delete(biens: Biens | number): Observable<Biens> {
    const id = typeof biens === 'number' ? biens : biens.id;
    const url = `${this.BiensUrl}/${id}`;

    return this.http.delete<Biens>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Biens id=${id}`)),
      catchError(this.handleError<Biens>('delete'))
    );
  }

 

}


