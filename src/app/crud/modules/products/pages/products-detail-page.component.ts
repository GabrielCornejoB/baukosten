import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'products-detail-page',
  template: ` <crud-header title="Materials of _____" /> `,
})
export class ProductsDetailPageComponent {
  private aRoute = inject(ActivatedRoute);
  private router = inject(Router);
}
