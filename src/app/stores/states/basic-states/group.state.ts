import { GroupVM } from '@view-models';

export class GroupState {
  public readonly arr: GroupVM[];
  constructor(props: GroupState) {
    this.arr = props.arr;
  }
}