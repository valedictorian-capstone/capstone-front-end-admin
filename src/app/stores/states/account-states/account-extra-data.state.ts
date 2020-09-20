import { AccountExtraDataVM } from '@view-models';

export class AccountExtraDataState {
  public readonly arr: AccountExtraDataVM[];
  constructor(props: AccountExtraDataState) {
    this.arr = props.arr;
  }
}