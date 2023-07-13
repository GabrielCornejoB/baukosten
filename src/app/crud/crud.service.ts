import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class CrudService<TData, TDatum /*, TCreate, TUpdate*/> {
  private readonly APIUrl = `http://localhost:8090/api/collections/${this.getResource()}/records/`;

  constructor(protected http: HttpClient) {}

  abstract getResource(): string;
  abstract getListEndpoint(): string;
  abstract getViewEndpoint(): string;

  public getAll(): Observable<TData> {
    return this.http.get<TData>(`${this.APIUrl}${this.getListEndpoint()}`);
  }

  public getOne(id: string): Observable<TDatum> {
    return this.http.get<TDatum>(
      `${this.APIUrl}${id}${this.getViewEndpoint()}`
    );
  }

  // public create(newCreationBody: TCreate): Observable<TRead>

  // public update(updateBody: TUpdate): Observable<TRead>

  // public delete(id: string): Observable<TRead>
}
