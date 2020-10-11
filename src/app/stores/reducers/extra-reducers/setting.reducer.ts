import { SETTING_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { SettingState } from '@stores/states';
import { Setting } from '@stores/models';
export const useSettingReducer: Reducer<SettingState, Setting> = (state: SettingState = new SettingState({ setting: { menuItemOpen: 'profile' } }), action: Setting): SettingState => {
        switch (action.type) {
        case SETTING_TYPE.NAGIVATION: {
            console.log(action?.payload?.menuItemOpen ?? state);
            return {
                ...state,
                setting: { menuItemOpen: action.payload.menuItemOpen },
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};