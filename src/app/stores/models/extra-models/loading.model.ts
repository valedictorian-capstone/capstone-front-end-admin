import { LoadingVM } from '@view-models';

export class Loading {
  public readonly type: string;
  public readonly payload: LoadingVM;
  constructor(props: Loading) {
    this.type = props.type;
    this.payload = props.payload;
  }
}