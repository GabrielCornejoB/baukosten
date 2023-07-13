export interface Product {
  id: string;
  product: string;
  unit: string;
}

export interface ProductResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: ProductResponseItem[];
}

export interface ProductResponseItem {
  id: string;
  product: string;
  expand: {
    unit: {
      unit: string;
    };
  };
}
