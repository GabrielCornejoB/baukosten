import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassificationsService } from '../../classifications.service';
import { ClassificationReqBody } from '../../classification.interface';

@Component({
  selector: 'classifications-form-page',
  templateUrl: './classifications-form-page.component.html',
  styles: [],
})
export class ClassificationsFormPageComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private classificationsService = inject(ClassificationsService);

  public newClassificationForm: FormGroup = this.fb.group({
    classification: ['', Validators.required],
  });

  get classification(): ClassificationReqBody {
    return this.newClassificationForm.value as ClassificationReqBody;
  }

  public onSubmit(): void {
    if (this.newClassificationForm.invalid)
      return this.newClassificationForm.markAllAsTouched();

    this.classificationsService.create(this.classification).subscribe({
      next: () => this.router.navigateByUrl('/crud/classifications/list'),
      error: (e) => {
        this.newClassificationForm.reset();
        console.error(e);
      },
    });
  }
}
