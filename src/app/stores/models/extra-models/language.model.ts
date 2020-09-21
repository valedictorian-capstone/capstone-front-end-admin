import { LanguageVM } from '@view-models';

export class Language {
  public readonly type: string;
  public readonly payload: LanguageVM;
  constructor(props: Language) {
    this.type = props.type;
    this.payload = props.payload;
  }
}