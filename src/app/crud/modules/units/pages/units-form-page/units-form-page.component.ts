import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'units-form-page',
  templateUrl: './units-form-page.component.html',
})
export class UnitsFormPageComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  public newUnitForm: FormGroup = this.fb.group({
    unit: ['', Validators.required],
  });

  public onSubmit(): void {
    if (this.newUnitForm.invalid) return this.newUnitForm.markAllAsTouched();

    this.router.navigateByUrl('/crud/units/list');
  }
}
