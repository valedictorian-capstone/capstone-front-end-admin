import { LANGUAGE_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { LanguageState } from '@stores/states';
import { Language } from '@stores/models';

export const useLanguageReducer: Reducer<LanguageState, Language> = (state: LanguageState = new LanguageState({ language: { region: 'en' } }), action: Language): LanguageState => {
  switch (action.type) {
    case LANGUAGE_TYPE.EN: {
      return {
        ...state,
        language: { region: action.payload.region },
      };
    }
    case LANGUAGE_TYPE.VI: {
      return {
        ...state,
        language: { region: action.payload.region },
      };
    }
    case LANGUAGE_TYPE.JP: {
      return {
        ...state,
        language: { region: action.payload.region },
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};