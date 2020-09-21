import { RootState } from '@stores/states';
import { combineReducers, Reducer, CombinedState } from 'redux';
import { useAccountExtraDataReducer, useAccountExtraInformationDataReducer, useAccountExtraInformationReducer, useAccountReducer } from './account-reducers';
import { useDepartmentReducer, useGroupReducer, usePatternReducer, usePermissionReducer, useRoleReducer } from './basic-reducers';
import { useCommentReducer, useConditionReducer, useWorkFlowConnectionReducer, useWorkFlowInstanceReducer, useWorkFlowReducer, useWorkFlowStepInstanceReducer, useWorkFlowStepReducer } from './bpmn-reducers';
import { useCustomerExtraDataReducer, useCustomerExtraInformationDataReducer, useCustomerExtraInformationReducer, useCustomerReducer } from './customer-reducers';
import { useFormControlReducer, useFormDataReducer, useFormValueReducer, useFormGroupReducer } from './form-reducers';
import { useLanguageReducer, useLoadingReducer } from './extra-reducers';

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
  customerExtraData: useCustomerExtraDataReducer,
  customerExtraInformationData: useCustomerExtraInformationDataReducer,
  customerExtraInformation: useCustomerExtraInformationReducer,
  customer: useCustomerReducer,
  accountExtraData: useAccountExtraDataReducer,
  accountExtraInformationData: useAccountExtraInformationDataReducer,
  accountExtraInformation: useAccountExtraInformationReducer,
  account: useAccountReducer,
  formControl: useFormControlReducer,
  formData: useFormDataReducer,
  formValue: useFormValueReducer,
  formGroup: useFormGroupReducer,
}));