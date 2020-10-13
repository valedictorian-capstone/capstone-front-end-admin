import { SettingVM } from '@view-models';

export class SettingState {
  public readonly setting: SettingVM;
  constructor(props: SettingState) {
    this.setting = props.setting;
  }
}