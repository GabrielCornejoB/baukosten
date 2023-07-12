import { Primary } from '../primaries/primary.interface';

export interface Product {
  id: number;
  product: string;
  measurement_unit: string;
  materials: Primary[];
}

export interface DisplayProduct {
  id: number;
  product: string;
  measurement_unit: string;
}
