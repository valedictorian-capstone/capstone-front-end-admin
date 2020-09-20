export class BaseModel<VM, CM, UM> {
  public readonly type: string;
  public readonly payload: Payload<VM, CM, UM>;
  constructor(props: BaseModel<VM, CM, UM>) {
    this.type = props.type;
    this.payload = props.payload;
  }
}

// tslint:disable-next-line: max-classes-per-file
export class Payload<VM, CM, UM> {
  public readonly data: VM[] | CM | UM | VM | string;
  constructor(props: Payload<VM, CM, UM>) {
    this.data = props.data;
  }
}