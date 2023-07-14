export interface Classification {
  id: string;
  classification: string;
}

export interface ClassificationResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Classification[];
}

export interface ClassificationReqBody {
  classification: string;
}
