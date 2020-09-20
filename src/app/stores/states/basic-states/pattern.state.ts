import { PatternVM } from '@view-models';

export class PatternState {
  public readonly arr: PatternVM[];
  constructor(props: PatternState) {
    this.arr = props.arr;
  }
}