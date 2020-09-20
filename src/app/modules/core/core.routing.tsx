import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { WorkFlowModule } from './modules';

export const CoreRoutes = (props: {}) => {
  return (
    <BrowserRouter>
      <Route path={['/', '/work-flow']} component={() => <WorkFlowModule />}/>
      <Route path={['', '']}/>
    </BrowserRouter>
  );
};