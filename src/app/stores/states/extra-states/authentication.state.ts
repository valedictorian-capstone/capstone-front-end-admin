import { AuthenticationVM } from '@view-models';

export class AuthenticationState {
  public readonly arr: AuthenticationVM[];
  constructor(props: AuthenticationState) {
    this.arr = props.arr;
  }
}