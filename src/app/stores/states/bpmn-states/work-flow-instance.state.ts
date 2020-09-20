import { WorkFlowInstanceVM } from '@view-models';

export class WorkFlowInstanceState {
  public readonly arr: WorkFlowInstanceVM[];
  constructor(props: WorkFlowInstanceState) {
    this.arr = props.arr;
  }
}