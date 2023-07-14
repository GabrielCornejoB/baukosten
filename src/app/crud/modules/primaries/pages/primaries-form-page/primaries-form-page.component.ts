import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimariesService } from '../../primaries.service';
import { PrimaryReqBody } from '../../interfaces/primary.interface';
import { Unit } from '../../../units/unit.interface';
import { Classification } from '../../../classifications/classification.interface';
import { UnitsService } from '../../../units/units.service';
import { ClassificationsService } from '../../../classifications/classifications.service';

@Component({
  selector: 'primaries-form-page',
  templateUrl: './primaries-form-page.component.html',
  styles: [],
})
export class PrimariesFormPageComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private primariesService = inject(PrimariesService);

  private unitsService = inject(UnitsService);
  private classificationsService = inject(ClassificationsService);

  public units: Unit[] = [];
  public classifications: Classification[] = [];

  public newPrimaryForm: FormGroup = this.fb.group({
    primary: ['', Validators.required],
    unit: ['', Validators.required],
    classification: ['', Validators.required],
  });

  ngOnInit(): void {
    this.getUnits();
    this.getClassifications();
  }

  get primary(): PrimaryReqBody {
    return this.newPrimaryForm.value as PrimaryReqBody;
  }

  public getUnits(): void {
    this.unitsService.getAll().subscribe((data) => {
      this.units = data.items.map((unit) => ({
        id: unit.id,
        unit: unit.unit,
      }));
    });
  }

  public getClassifications(): void {
    this.classificationsService.getAll().subscribe((data) => {
      this.classifications = data.items.map((classification) => ({
        id: classification.id,
        classification: classification.classification,
      }));
    });
  }

  public onSubmit(): void {
    if (this.newPrimaryForm.invalid)
      return this.newPrimaryForm.markAllAsTouched();

    this.primariesService.create(this.primary).subscribe({
      next: () => this.router.navigateByUrl('/crud/primaries/list'),
      error: (e) => {
        this.newPrimaryForm.reset();
        console.error(e);
      },
    });
  }
}
