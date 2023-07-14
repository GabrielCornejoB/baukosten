import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class CrudService<TData, TDatum> {
  private readonly APIUrl = `http://localhost:8090/api/collections/${this.getResource()}/records/`;

  constructor(protected http: HttpClient) {}

  abstract getResource(): string;
  abstract getQueryParams(): string;

  public getAll(): Observable<TData> {
    return this.http.get<TData>(`${this.APIUrl}${this.getQueryParams()}`);
  }

  public getOne(id: string): Observable<TDatum | undefined> {
    return this.http
      .get<TDatum>(`${this.APIUrl}${id}${this.getQueryParams()}`)
      .pipe(catchError(() => of(undefined)));
  }

  // public create(newCreationBody: TCreate): Observable<TRead>

  // public update(updateBody: TUpdate): Observable<TRead>

  public delete(id: string): Observable<boolean> {
    return this.http.delete(`${this.APIUrl}${id}`).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
