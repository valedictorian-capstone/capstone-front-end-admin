import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavigateComponent, LoginComponent, RegisterComponent } from './components';

export const AuthRoutes = (props: {}) => {
  alert('aaaa');
  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/navigate']} component={() => <NavigateComponent />} />
        {/* <Route path={['/', '/login']} component={() => <LoginComponent />} />
        <Route path={['/register']} component={() => <RegisterComponent click={(e) => {console.log('qqqqqq')}}/>} /> */}
      </Switch>
    </BrowserRouter>
  );
};