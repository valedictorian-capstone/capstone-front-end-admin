import { ActionCreatorsMapObject } from 'redux';
import { Setting } from '@stores/models';
import { SETTING_TYPE } from '@stores/types';

export const useSettingAction = (): ActionCreatorsMapObject<Setting> => {

    const storeMenuItemOpen = (data: string): Setting => {
        return { type: SETTING_TYPE.NAGIVATION, payload: { menuItemOpen: data } };
    };
    return { storeMenuItemOpen };
};