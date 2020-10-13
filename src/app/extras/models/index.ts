export class BaseModel<VM, CM, UM> {
  public readonly type: string;
  public readonly payload: Payload<VM, CM, UM>;
  public readonly onSuccess?: (data: any) => void;
  public readonly onError?: (err: any) => void;
  constructor(props: BaseModel<VM, CM, UM>) {
    this.type = props.type;
    this.payload = props.payload;
    this.onError = props.onError;
    this.onSuccess = props.onSuccess;
  }
}

// tslint:disable-next-line: max-classes-per-file
export class Payload<VM, CM, UM> {
  public readonly data: VM[] | CM | UM | VM | string | string[];
  constructor(props: Payload<VM, CM, UM>) {
    this.data = props.data;
  }
}