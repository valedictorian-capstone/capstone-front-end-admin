import { IBaseProps } from '@extras/interfaces';
import { useLoadingAction } from '@stores/actions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { WorkFlowListComponent } from '../../components';
import './work-flow-main.component.css';
export interface IWorkFlowMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const WorkFlowMainComponent: React.FC<IWorkFlowMainComponentProps> = (props: IWorkFlowMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return <WorkFlowListComponent fatherProps={props} input={{}} output={{
    onSelectItem: (form) => {
      dispatch(useLoadingAction().showLoader());
      setTimeout(() => {
        history.push(`work-flow/${form.id}`);
        dispatch(useLoadingAction().hideLoader());
      }, 500);
    },
  }} />;
};