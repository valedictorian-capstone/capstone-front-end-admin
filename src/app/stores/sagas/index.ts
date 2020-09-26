import { all } from 'redux-saga/effects';
import { useAccountExtraDataSaga, useAccountExtraInformationDataSaga, useAccountExtraInformationSaga, useAccountSaga } from './account-sagas';
import { useDepartmentSaga, useGroupSaga, usePatternSaga, usePermissionSaga, useRoleSaga } from './basic-sagas';
import { useCommentSaga, useConditionSaga, useWorkFlowConnectionSaga, useWorkFlowInstanceSaga, useWorkFlowSaga, useWorkFlowStepInstanceSaga, useWorkFlowStepSaga } from './bpmn-sagas';
import { useCustomerExtraDataSaga, useCustomerExtraInformationDataSaga, useCustomerExtraInformationSaga, useCustomerSaga } from './customer-sagas';
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
          useCustomerExtraDataSaga().useInit(),
          useCustomerExtraInformationDataSaga().useInit(),
          useCustomerExtraInformationSaga().useInit(),
          useCustomerSaga().useInit(),
          useAccountExtraDataSaga().useInit(),
          useAccountExtraInformationDataSaga().useInit(),
          useAccountExtraInformationSaga().useInit(),
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