import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Primary } from '../primary.interface';
import { switchMap } from 'rxjs';
import { PrimariesService } from '../primaries.service';

@Component({
  selector: 'primaries-detail-page',
  template: `
    <crud-header title="Suppliers of ____" />

    <div *ngIf="str">{{ str }}</div>
  `,
})
export class PrimariesDetailPageComponent implements OnInit {
  private aRoute = inject(ActivatedRoute);
  private primariesService = inject(PrimariesService);

  public primary?: Primary;
  public str?: string;

  ngOnInit(): void {
    this.aRoute.params
      .pipe(switchMap(({ id }) => this.primariesService.getOne(id)))
      .subscribe((item) => {
        console.log(item.id);
      });
  }
}
