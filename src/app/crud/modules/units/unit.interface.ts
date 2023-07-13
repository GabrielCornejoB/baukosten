export interface Unit {
  id: string;
  unit: string;
}

export interface UnitResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Unit[];
}
