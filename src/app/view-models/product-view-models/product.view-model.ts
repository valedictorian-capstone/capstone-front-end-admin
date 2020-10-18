import { ProductExtraInformationDataVM } from '.';
import { DepartmentVM, RoleVM } from '../basic-view-models';
import { CommentVM, WorkFlowStepInstanceVM } from '../bpmn-view-models';

export interface ProductVM {
  readonly id: string;
  readonly code: string;
  readonly name: string;
  readonly brand: string;
  readonly price: number;
  readonly description: string;
  readonly productExtraInformationDatas: ProductExtraInformationDataVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface ProductCM {
  id: string;
  code: string;
  name: string;
  brand: string;
  price: number;
  description: string;
}

export interface ProductUM {
  id: string;
  code: string;
  name: string;
  brand: string;
  price: number;
  description: string;
}