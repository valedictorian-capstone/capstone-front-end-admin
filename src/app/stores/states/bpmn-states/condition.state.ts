import { ConditionVM } from '@view-models';

export class ConditionState {
  public readonly arr: ConditionVM[];
  constructor(props: ConditionState) {
    this.arr = props.arr;
  }
}