import { RootState } from '@stores/states';
import { combineReducers, Reducer, CombinedState } from 'redux';
import { useAccountExtraInformationDataReducer, useAccountReducer } from './account-reducers';
import { useDepartmentReducer, useGroupReducer, usePatternReducer, usePermissionReducer, useRoleReducer, useExtraInformationReducer } from './basic-reducers';
import { useCommentReducer, useConditionReducer, useWorkFlowConnectionReducer, useWorkFlowInstanceReducer, useWorkFlowReducer, useWorkFlowStepInstanceReducer, useWorkFlowStepReducer } from './bpmn-reducers';
import { useCustomerExtraInformationDataReducer, useCustomerReducer } from './customer-reducers';
import { useProductExtraInformationDataReducer, useProductReducer } from './product-reducers';
import { useFormControlReducer, useFormDataReducer, useFormValueReducer, useFormGroupReducer } from './form-reducers';
import { useAuthenticationReducer, useLanguageReducer, useLoadingReducer, useSettingReducer } from './extra-reducers';

export const useRootReducer = (): Reducer<CombinedState<RootState>> => (combineReducers<RootState>({
  department: useDepartmentReducer,
  group: useGroupReducer,
  pattern: usePatternReducer,
  permission: usePermissionReducer,
  role: useRoleReducer,
  loading: useLoadingReducer,
  language: useLanguageReducer,
  comment: useCommentReducer,
  condition: useConditionReducer,
  workFlowConnection: useWorkFlowConnectionReducer,
  workFlowInstance: useWorkFlowInstanceReducer,
  workFlow: useWorkFlowReducer,
  workFlowStepInstance: useWorkFlowStepInstanceReducer,
  workFlowStep: useWorkFlowStepReducer,
  extraInformation: useExtraInformationReducer,
  customerExtraInformationData: useCustomerExtraInformationDataReducer,
  customer: useCustomerReducer,
  product: useProductReducer,
  productExtraInformationData: useProductExtraInformationDataReducer,
  accountExtraInformationData: useAccountExtraInformationDataReducer,
  account: useAccountReducer,
  formControl: useFormControlReducer,
  formData: useFormDataReducer,
  formValue: useFormValueReducer,
  formGroup: useFormGroupReducer,
  authentication: useAuthenticationReducer,
  setting: useSettingReducer,
}));