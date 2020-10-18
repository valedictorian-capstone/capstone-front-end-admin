import { all } from 'redux-saga/effects';
import { useAccountExtraInformationDataSaga, useAccountSaga } from './account-sagas';
import { useDepartmentSaga, useGroupSaga, usePatternSaga, usePermissionSaga, useRoleSaga, useExtraInformationSaga } from './basic-sagas';
import { useCommentSaga, useConditionSaga, useWorkFlowConnectionSaga, useWorkFlowInstanceSaga, useWorkFlowSaga, useWorkFlowStepInstanceSaga, useWorkFlowStepSaga } from './bpmn-sagas';
import { useCustomerExtraInformationDataSaga, useCustomerSaga } from './customer-sagas';
import { useProductExtraInformationDataSaga, useProductSaga } from './product-sagas';
import { useAuthenticationSaga } from './extra-sagas/authentication.saga';
import { useFormControlSaga, useFormDataSaga, useFormValueSaga, useFormGroupSaga } from './form-sagas';
export const useRootSaga = () => {
  function* useInit() {
    yield all([
      useDepartmentSaga().useInit(),
      useGroupSaga().useInit(),
      usePatternSaga().useInit(),
      usePermissionSaga().useInit(),
      useRoleSaga().useInit(),
      useCommentSaga().useInit(),
      useConditionSaga().useInit(),
      useWorkFlowConnectionSaga().useInit(),
      useWorkFlowInstanceSaga().useInit(),
      useWorkFlowSaga().useInit(),
      useWorkFlowStepInstanceSaga().useInit(),
      useWorkFlowStepSaga().useInit(),
      useCustomerExtraInformationDataSaga().useInit(),
      useCustomerSaga().useInit(),
      useProductExtraInformationDataSaga().useInit(),
      useProductSaga().useInit(),
      useAccountExtraInformationDataSaga().useInit(),
      useExtraInformationSaga().useInit(),
      useAccountSaga().useInit(),
      useFormControlSaga().useInit(),
      useFormDataSaga().useInit(),
      useFormValueSaga().useInit(),
      useFormGroupSaga().useInit(),
      useAuthenticationSaga().useInit(),
    ]);
  }
  return { useInit };
};