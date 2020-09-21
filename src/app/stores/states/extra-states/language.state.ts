import { LanguageVM } from '@view-models';

export class LanguageState {
  public readonly language: LanguageVM;
  constructor(props: LanguageState) {
    this.language = props.language;
  }
}