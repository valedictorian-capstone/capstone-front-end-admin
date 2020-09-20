import { WorkFlowConnectionVM } from '@view-models';

export class WorkFlowConnectionState {
  public readonly arr: WorkFlowConnectionVM[];
  constructor(props: WorkFlowConnectionState) {
    this.arr = props.arr;
  }
}