import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnTitleTransform',
})
export class ColumnTitleTransformPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'id':
        return 'ID';
      case 'primary':
        return 'Primary';
      case 'measurement_unit':
        return 'Measurement Unit';
      case 'classification':
        return 'Classification';
      case 'unit':
        return 'Unit';
      default:
        return '';
    }
  }
}
