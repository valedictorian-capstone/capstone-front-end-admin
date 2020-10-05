import { IBaseProps } from '@extras/interfaces';
import { useWorkFlowAction, useLoadingAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { WorkFlowVM } from '@view-models';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { WorkFlowViewComponent } from '../../components';
import './work-flow-editable.component.css';
export interface IWorkFlowEditableComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const WorkFlowEditableComponent: React.FC<IWorkFlowEditableComponentProps> = (props: IWorkFlowEditableComponentProps) => {
  const arr = useSelector<RootState, WorkFlowVM[]>((state) => state.workFlow.arr);
  const { id } = useParams<{ id: string }>();
  const [workFlow, setWorkFlow] = React.useState<WorkFlowVM>(arr.find((e) => e.id === id) as WorkFlowVM);
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    if (arr.length === 0) {
      dispatch(useWorkFlowAction().getAll());
    }
  }, []);
  React.useEffect(() => {
    const data = arr.find((e) => e.id === id) as WorkFlowVM;
    setWorkFlow(data);
  }, [arr]);
  return workFlow ? <WorkFlowViewComponent fatherProps={props} input={{ data: workFlow }} output={{
    back: () => {
      dispatch(useLoadingAction().showLoader());
      setTimeout(() => {
        history.goBack();
        dispatch(useLoadingAction().hideLoader());
      }, 500);
    },
  }} /> : <></>;
};