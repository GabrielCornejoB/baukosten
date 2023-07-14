export interface ProductPrimary {
  id: string;
  primary: string;
  unit_price: number | undefined;
  usage: number;
  waste: number;
}

export interface ProductPrimaryResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: {
    id: string;
    usage: number;
    waste: number;
    expand: {
      primary: {
        primary: string;
        expand?: {
          default_primary_supplier: {
            unit_price: number;
          };
        };
      };
    };
  }[];
}
