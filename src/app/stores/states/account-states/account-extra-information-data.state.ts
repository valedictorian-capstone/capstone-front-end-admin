import { AccountExtraInformationDataVM } from '@view-models';

export class AccountExtraInformationDataState {
  public readonly arr: AccountExtraInformationDataVM[];
  constructor(props: AccountExtraInformationDataState) {
    this.arr = props.arr;
  }
}