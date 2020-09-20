import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavigateComponent, LoginComponent, RegisterComponent } from './components';

export const AuthRoutes = (props: {}) => {
  return (
    <BrowserRouter>
      <Route path={['/', '/navigate']} component={() => <NavigateComponent/>}/>
      <Route path={['/login']} component={() => <LoginComponent/>}/>
      <Route path={['/register']} component={() => <RegisterComponent/>}/>
    </BrowserRouter>
  );
};