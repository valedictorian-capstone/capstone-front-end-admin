import { CustomerVM } from '../customer-view-models';

export interface GroupVM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Customers: CustomerVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface GroupCM {
  readonly Name: string;
  readonly Description: string;
}

export interface GroupUM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
}