import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'src/styles.scss';
import * as serviceWorker from 'src/worker.service';
import { AppComponent } from '@app/app.component';
import { AppRoutes } from '@app/app.routing';
import { useStoreModule } from '@app/stores';
ReactDOM.render(
  <Provider store={useStoreModule()}>
    <AppComponent>
      <AppRoutes />
    </AppComponent>
  </Provider>,
  document.getElementById('root'));
serviceWorker.register();