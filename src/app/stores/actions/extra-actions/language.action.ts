import { ActionCreatorsMapObject } from 'redux';
import { Language } from '@stores/models';
import { LANGUAGE_TYPE } from '@stores/types';

export const useLanguageAction = (): ActionCreatorsMapObject<Language> => {

  const toEnglish = (): Language => {
    return { type: LANGUAGE_TYPE.EN, payload: { region: 'en' } };
  };
  const toVietnamese = (): Language => {
    return { type: LANGUAGE_TYPE.VI, payload: { region: 'vi' } };
  };
  const toJapanese = (): Language => {
    return { type: LANGUAGE_TYPE.JP, payload: { region: 'jp' } };
  };
  return { toEnglish, toVietnamese, toJapanese };
};