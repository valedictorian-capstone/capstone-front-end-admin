import React from "react";
import { HashRouter, Route } from "react-router-dom";

export const AppRoutes = (props: {}) => {
  return (
    <HashRouter>
        <Route exact path={['/', '/home']}></Route>
        <Route exact path={['', '']}></Route>
    </HashRouter>
  );
}