export interface Supplier {
  id: string;
  supplier: string;
}

export interface SupplierResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Supplier[];
}
