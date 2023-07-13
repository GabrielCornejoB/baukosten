import { Item as ClassificationItem } from '../classifications/classification.interface';
import { Item as UnitItem } from '../units/unit.interface';

export interface Primary {
  id: string;
  primary: string;
  unit: string;
  classification: string;
}

// Generated by https://quicktype.io

export interface PrimaryResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Item[];
}

export interface Item {
  classification: string;
  collectionId: string;
  collectionName: string;
  created: string;
  expand: Expand;
  id: string;
  primary: string;
  unit: string;
  updated: string;
}

export interface Expand {
  classification: ClassificationItem;
  unit: UnitItem;
}
