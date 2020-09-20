import React from 'react';
import { CoreRoutes } from './core.routing';
import { LayoutComponent } from './pages';

export const CoreModule = () => {
  return (
    <LayoutComponent>
      <CoreRoutes />
    </LayoutComponent>
  );
};