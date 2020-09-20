import { WorkFlowStepVM } from '@view-models';

export class WorkFlowStepState {
  public readonly arr: WorkFlowStepVM[];
  constructor(props: WorkFlowStepState) {
    this.arr = props.arr;
  }
}