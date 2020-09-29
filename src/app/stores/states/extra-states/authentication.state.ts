import { AuthenticationVM } from '@view-models';

export class AuthenticationState {
  public readonly item: AuthenticationVM;
  constructor(props: AuthenticationState) {
    this.item = props.item;
  }
}