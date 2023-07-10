import { Component, OnInit, inject } from '@angular/core';
import { SmallUser } from './user.interface';
import { TestsService } from './tests.service';

@Component({
  selector: 'tests-read-page',
  template: `<crud-read-page
    title="Users"
    [tableData]="users"
    [tableColumns]="keys"
  />`,
})
export class ReadPageComponent implements OnInit {
  private usersService = inject(TestsService);

  public users: SmallUser[] = [];

  public keys: string[] = [];

  ngOnInit(): void {
    this.usersService.getAll().subscribe((users) => {
      this.users = users;
      this.keys = Object.keys(users[0]);
    });
  }
}
