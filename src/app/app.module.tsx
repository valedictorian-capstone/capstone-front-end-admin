import React from 'react';
import ReactDOM from 'react-dom';
import 'src/styles.scss';
import * as serviceWorker from 'src/worker.service';
import { AppComponent } from 'src/app/app.component';
import { AppRoutes } from 'src/app/app.routing';
ReactDOM.render(
  <React.StrictMode>
      <AppComponent>
        <AppRoutes/>
      </AppComponent>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();