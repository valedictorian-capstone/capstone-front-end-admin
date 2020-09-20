import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { WorkFlowMainComponent } from './pages';

export const WorkFlowRoutes = (props: {}) => {
  return (
    <BrowserRouter>
      <Route path={['/', '/work-flow']} component={() => <WorkFlowMainComponent />}/>
      <Route path={['', '']}/>
    </BrowserRouter>
  );
};