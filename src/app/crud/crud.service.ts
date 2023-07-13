import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class CrudService<TData, TDatum /*, TCreate, TUpdate*/> {
  private readonly APIUrl = `http://localhost:8090/api/collections/${this.getResource()}/records/`;

  constructor(protected http: HttpClient) {}

  abstract getResource(): string;
  abstract getListQueryParams(): string;
  abstract getViewEndpoint(): string;

  public getAll(): Observable<TData> {
    return this.http.get<TData>(`${this.APIUrl}${this.getListQueryParams()}`);
  }

  public getOne(id: string): Observable<TDatum | undefined> {
    return this.http
      .get<TDatum>(`${this.APIUrl}${id}${this.getViewEndpoint()}`)
      .pipe(catchError(() => of(undefined)));
  }

  // public create(newCreationBody: TCreate): Observable<TRead>

  // public update(updateBody: TUpdate): Observable<TRead>

  // public delete(id: string): Observable<TRead>
}
