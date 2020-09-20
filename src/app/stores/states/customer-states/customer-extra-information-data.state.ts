import { CustomerExtraInformationDataVM } from '@view-models';

export class CustomerExtraInformationDataState {
  public readonly arr: CustomerExtraInformationDataVM[];
  constructor(props: CustomerExtraInformationDataState) {
    this.arr = props.arr;
  }
}