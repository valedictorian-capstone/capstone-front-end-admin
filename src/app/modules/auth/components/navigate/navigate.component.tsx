import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteProps } from 'react-router-dom';
import './navigate.component.css';
import { RootState } from '@stores/states';
import { useAuthenticationAction, useLoadingAction } from '@stores/actions';
import { LOADING_TYPE } from '@stores/types';

export const NavigateComponent = (props: Readonly<RouteProps>) => {
  //  redux
  console.log(useAuthenticationAction().authenticate('aaaaaaaa'));
  const dispatch = useDispatch();
  // const newToken = useSelector<RootState>((state) => state.authentication.arr[0] ? state.authentication.arr[0].JWTToken : '....');
  // useEffect(() => {
  //   const storedJwtToken = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : '';
  //   if (!storedJwtToken) {
  //     dispatch(useAuthenticationAction().authenticate('aaaaaaaa'));
  //     // localStorage.setItem('jwtToken', JSON.stringify(newToken));
  //     console.log('..............................');
  //     // setOpen(!open);
  //   }
  // }, []);
  //  material ui
  // const classes = useStyles();
  const [open, setOpen] = React.useState(true);
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