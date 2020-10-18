import { ProductVM } from '.';
import { ExtraInformationVM } from '../basic-view-models';

export interface ProductExtraInformationDataVM {
  readonly id: string;
  readonly extraInformation: ExtraInformationVM;
  readonly product: ProductVM;
  readonly value: string;
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface ProductExtraInformationDataCM {
  productExtraInformationId: string;
  productExtraDataId: string;
  value: string;
}

export interface ProductExtraInformationDataUM {
  id: string;
  productExtraInformationId: string;
  productExtraDataId: string;
  value: string;
}