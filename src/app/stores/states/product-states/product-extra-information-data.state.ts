import { ProductExtraInformationDataVM } from '@view-models';

export class ProductExtraInformationDataState {
  public readonly arr: ProductExtraInformationDataVM[];
  constructor(props: ProductExtraInformationDataState) {
    this.arr = props.arr;
  }
}