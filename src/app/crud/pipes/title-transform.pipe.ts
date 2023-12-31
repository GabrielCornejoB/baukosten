import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleTransform',
})
export class TitleTransformPipe implements PipeTransform {
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
      case 'product':
        return 'Product';
      case 'supplier':
        return 'Supplier';
      case 'default_supplier':
        return 'Default Supplier';
      case 'default_price':
        return 'Unit Price';
      case 'unit_price':
        return "Primary's Unit Price";
      case 'updated':
        return 'Last Updated';
      case 'usage':
        return 'Usage';
      case 'waste':
        return 'Waste';
      default:
        return '';
    }
  }
}
