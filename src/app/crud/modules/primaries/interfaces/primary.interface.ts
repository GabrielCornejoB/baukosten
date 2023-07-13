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
  items: PrimaryResponseItem[];
}

export interface PrimaryResponseItem {
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
