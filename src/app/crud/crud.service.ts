import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class CrudService<TRead /*, TCreate, TUpdate*/> {
  private readonly APIUrl = `http://localhost:8090/api/collections/${this.getResourceEndpoint()}`;

  constructor(protected http: HttpClient) {}

  abstract getResourceEndpoint(): string;

  public getAll(): Observable<TRead> {
    return this.http.get<TRead>(`${this.APIUrl}`);
  }

  // public getOne(id: string): Observable<TRead>

  // public create(newCreationBody: TCreate): Observable<TRead>

  // public update(updateBody: TUpdate): Observable<TRead>

  // public delete(id: string): Observable<TRead>
}
