import { DepartmentVM } from '@view-models';

export class DepartmentState {
  public readonly arr: DepartmentVM[];
  constructor(props: DepartmentState) {
    this.arr = props.arr;
  }
}