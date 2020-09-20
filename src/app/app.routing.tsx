import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

export const AppRoutes = (props: {}) => {
  return (
    <HashRouter>
      <Route path={['/', '/home']}/>
      <Route path={['', '']}/>
    </HashRouter>
  );
};