import { ProductVM } from '@view-models';

export class ProductState {
  public readonly arr: ProductVM[];
  constructor(props: ProductState) {
    this.arr = props.arr;
  }
}