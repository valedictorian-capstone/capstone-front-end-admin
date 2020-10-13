import { SettingVM } from '@view-models';

export class Setting {
  public readonly type: string;
  public readonly payload: SettingVM;
  constructor(props: Setting) {
    this.type = props.type;
    this.payload = props.payload;
  }
}