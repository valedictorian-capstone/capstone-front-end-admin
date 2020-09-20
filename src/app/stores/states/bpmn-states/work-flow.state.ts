import { WorkFlowVM } from '@view-models';

export class WorkFlowState {
  public readonly arr: WorkFlowVM[];
  constructor(props: WorkFlowState) {
    this.arr = props.arr;
  }
}