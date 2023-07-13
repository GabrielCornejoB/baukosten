import { Supplier } from '../suppliers/supplier.interface';

// UI Model
export interface Primary {
  id: string;
  primary: string;
  unit: string;
  classification: string;
  default_supplier: string;
  default_price: number | undefined;
}

export interface PrimaryResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: PrimaryResponseItems[];
}

export interface PrimaryResponseItems {
  id: string;
  primary: string;
  expand: {
    classification: {
      classification: string;
    };
    default_primary_supplier?: {
      unit_price: number;
      expand: {
        supplier: {
          supplier: string;
        };
      };
    };
    unit: {
      unit: string;
    };
  };
}

// TODO: Move to another File
export interface PrimarySupplierResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: {
    id: string;
    primary: string;
    supplier: string;
    updated: string;
    expand: {
      supplier: Supplier;
    };
  }[];
}
