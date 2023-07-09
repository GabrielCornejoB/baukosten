import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class CrudService<TRead, TCreate, TUpdate> {
  private http = inject(HttpClient);

  private readonly APIUrl = `localhost:3000/${this.getResourceEndpoint()}`;

  constructor() {}

  abstract getResourceEndpoint(): string;

  // public getAll(): Observable<TRead[]>

  // public getOne(id: string): Observable<TRead>

  // public create(newCreationBody: TCreate): Observable<TRead>

  // public update(updateBody: TUpdate): Observable<TRead>

  // public delete(id: string): Observable<TRead>
}
