import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuppliersService } from '../../suppliers.service';
import { SupplierReqBody } from '../../supplier.interface';

@Component({
  selector: 'suppliers-form-page',
  templateUrl: './suppliers-form-page.component.html',
  styles: [],
})
export class SuppliersFormPageComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private suppliersService = inject(SuppliersService);

  public newSupplierForm: FormGroup = this.fb.group({
    supplier: ['', Validators.required],
  });

  get supplier(): SupplierReqBody {
    return this.newSupplierForm.value as SupplierReqBody;
  }

  public onSubmit(): void {
    if (this.newSupplierForm.invalid)
      return this.newSupplierForm.markAllAsTouched();

    this.suppliersService.create(this.supplier).subscribe({
      next: () => this.router.navigateByUrl('/crud/suppliers/list'),
      error: (e) => {
        this.newSupplierForm.reset();
        console.error(e);
      },
    });
  }
}
