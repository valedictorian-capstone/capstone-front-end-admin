import { DepartmentState, GroupState, PatternState, PermissionState, RoleState } from './basic-states';
import { LoadingState } from './extra-states';
import { CommentState, ConditionState, WorkFlowConnectionState, WorkFlowInstanceState, WorkFlowState, WorkFlowStepInstanceState, WorkFlowStepState } from './bpmn-states';
import { CustomerExtraDataState, CustomerExtraInformationDataState, CustomerExtraInformationState, CustomerState } from './customer-states';
import { AccountExtraDataState, AccountExtraInformationDataState, AccountExtraInformationState, AccountState } from './account-states';
import { FormControlState, FormDataState, FormGroupState, FormValueState } from './form-states';
export * from './basic-states';
export * from './extra-states';
export * from './bpmn-states';
export * from './customer-states';
export * from './account-states';
export * from './form-states';

export class RootState {
  department: DepartmentState;
  group: GroupState;
  pattern: PatternState;
  permission: PermissionState;
  role: RoleState;
  loading: LoadingState;
  comment: CommentState;
  condition: ConditionState;
  workFlowConnection: WorkFlowConnectionState;
  workFlowInstance: WorkFlowInstanceState;
  workFlow: WorkFlowState;
  workFlowStepInstance: WorkFlowStepInstanceState;
  workFlowStep: WorkFlowStepState;
  customerExtraData: CustomerExtraDataState;
  customerExtraInformationData: CustomerExtraInformationDataState;
  customerExtraInformation: CustomerExtraInformationState;
  customer: CustomerState;
  accountExtraData: AccountExtraDataState;
  accountExtraInformationData: AccountExtraInformationDataState;
  accountExtraInformation: AccountExtraInformationState;
  account: AccountState;
  formControl: FormControlState;
  formData: FormDataState;
  formValue: FormValueState;
  formGroup: FormGroupState;
  constructor(props: RootState) {
    this.department = props.department;
    this.group = props.group;
    this.pattern = props.pattern;
    this.permission = props.permission;
    this.role = props.role;
    this.loading = props.loading;
    this.comment = props.comment;
    this.condition = props.condition;
    this.workFlowConnection = props.workFlowConnection;
    this.workFlowInstance = props.workFlowInstance;
    this.workFlow = props.workFlow;
    this.workFlowStepInstance = props.workFlowStepInstance;
    this.workFlowStep = props.workFlowStep;
    this.customerExtraData = props.customerExtraData;
    this.customerExtraInformationData = props.customerExtraInformationData;
    this.customerExtraInformation = props.customerExtraInformation;
    this.customer = props.customer;
    this.accountExtraData = props.accountExtraData;
    this.accountExtraInformationData = props.accountExtraInformationData;
    this.accountExtraInformation = props.accountExtraInformation;
    this.account = props.account;
    this.formControl = props.formControl;
    this.formData = props.formData;
    this.formValue = props.formValue;
    this.formGroup = props.formGroup;
  }
}