import { CommentVM } from '@view-models';

export class CommentState {
  public readonly arr: CommentVM[];
  constructor(props: CommentState) {
    this.arr = props.arr;
  }
}