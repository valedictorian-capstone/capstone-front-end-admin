import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteProps, useHistory } from 'react-router-dom';
import './navigate.component.css';
import { RootState } from '@stores/states';
import { useAuthenticationAction, useLoadingAction } from '@stores/actions';
import { IBaseProps } from '@extras/interfaces';

export interface INavigateComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const NavigateComponent: React.FC<INavigateComponentProps> = (props: INavigateComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = React.useState(!useSelector<RootState>((state) => state.authentication.item.IsLogin));
  useEffect(() => {
    const tokenInLocal = localStorage.getItem('crm-token');
    return tokenInLocal ? history.push('/core') : handleClose();
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  const spinnerLoading = open && <div id="nb-global-spinner" className="spinner">
    <div className="blob blob-0" />
    <div className="blob blob-1" />
    <div className="blob blob-2" />
    <div className="blob blob-3" />
    <div className="blob blob-4" />
    <div className="blob blob-5" />
  </div>;
  return (
    <div >
      <div onClick={handleClose}>{spinnerLoading}</div>
    </div>
  );
};