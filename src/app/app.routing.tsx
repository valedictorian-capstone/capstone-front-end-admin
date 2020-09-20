import { CoreModule, AuthModule } from '@modules';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

export const AppRoutes = (props: {}) => {
  return (
    <HashRouter>
      <Route path={['/', '/core']} component={() => <CoreModule />} />
      <Route path={['auth']} component={() => <AuthModule />} />
    </HashRouter>
  );
};