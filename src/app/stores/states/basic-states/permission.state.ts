import { PermissionVM } from '@view-models';

export class PermissionState {
  public readonly arr: PermissionVM[];
  constructor(props: PermissionState) {
    this.arr = props.arr;
  }
}