import { WorkFlowStepInstanceVM } from '@view-models';

export class WorkFlowStepInstanceState {
  public readonly arr: WorkFlowStepInstanceVM[];
  constructor(props: WorkFlowStepInstanceState) {
    this.arr = props.arr;
  }
}