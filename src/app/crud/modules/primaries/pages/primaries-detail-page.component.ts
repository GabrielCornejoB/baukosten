import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PrimariesService } from '../primaries.service';

@Component({
  selector: 'primaries-detail-page',
  template: ` <crud-header [title]="'Suppliers of ' + primary" /> `,
})
export class PrimariesDetailPageComponent implements OnInit {
  private aRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private primariesService = inject(PrimariesService);

  public primary?: string;

  ngOnInit(): void {
    this.aRoute.params
      .pipe(switchMap(({ id }) => this.primariesService.getOne(id)))
      .subscribe((item) => {
        if (!item) return this.router.navigateByUrl('/crud/primaries/list');
        this.primary = item.primary;
        return;
      });
  }
}
