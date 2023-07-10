import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { SmallUser, User } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  private http = inject(HttpClient);

  constructor() {}

  public getAll(): Observable<SmallUser[]> {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users) =>
          users.map((user) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            city: user.address.city,
          }))
        )
      );
  }
}
