import { LoadingVM } from '@view-models';

export class LoadingState {
  public readonly loading: LoadingVM;
  constructor(props: LoadingState) {
    this.loading = props.loading;
  }
}