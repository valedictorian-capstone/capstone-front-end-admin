import { RoleVM } from '@view-models';

export class RoleState {
  public readonly arr: RoleVM[];
  constructor(props: RoleState) {
    this.arr = props.arr;
  }
}