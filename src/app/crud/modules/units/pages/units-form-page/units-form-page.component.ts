import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UnitsService } from '../../units.service';
import { UnitReqBody } from '../../unit.interface';

@Component({
  selector: 'units-form-page',
  templateUrl: './units-form-page.component.html',
})
export class UnitsFormPageComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private unitsService = inject(UnitsService);

  public newUnitForm: FormGroup = this.fb.group({
    unit: ['', Validators.required],
  });

  get unit(): UnitReqBody {
    return this.newUnitForm.value as UnitReqBody;
  }

  public onSubmit(): void {
    if (this.newUnitForm.invalid) return this.newUnitForm.markAllAsTouched();

    this.unitsService.create(this.unit).subscribe({
      next: () => this.router.navigateByUrl('/crud/units/list'),
      error: (e) => {
        this.newUnitForm.reset();
        console.error(e);
      },
    });
  }
}
