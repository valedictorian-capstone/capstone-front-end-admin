import { ExtraInformationVM } from '@view-models';

export class ExtraInformationState {
  public readonly arr: ExtraInformationVM[];
  constructor(props: ExtraInformationState) {
    this.arr = props.arr;
  }
}