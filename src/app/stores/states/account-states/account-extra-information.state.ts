import { AccountExtraInformationVM } from '@view-models';

export class AccountExtraInformationState {
  public readonly arr: AccountExtraInformationVM[];
  constructor(props: AccountExtraInformationState) {
    this.arr = props.arr;
  }
}