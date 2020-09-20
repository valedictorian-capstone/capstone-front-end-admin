import { AccountVM } from '@view-models';

export class AccountState {
  public readonly arr: AccountVM[];
  constructor(props: AccountState) {
    this.arr = props.arr;
  }
}