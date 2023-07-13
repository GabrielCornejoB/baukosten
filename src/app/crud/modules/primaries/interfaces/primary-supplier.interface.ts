import { Supplier } from '../../suppliers/supplier.interface';

export interface PrimarySupplier {
  id: string;
  supplier: string;
  unit_price: number;
  updated: string;
}

export interface PrimarySupplierResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: {
    id: string;
    updated: string;
    unit_price: number;
    expand: {
      supplier: Supplier;
    };
  }[];
}
