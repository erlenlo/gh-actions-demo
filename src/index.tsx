import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './components/Error/ErrorBoundary';
import App from './components/Navigation/App';
import * as serviceWorker from './serviceWorker';

/** css-imports */
import './assets/styles/index.scss';

export const history = createBrowserHistory({ basename: '/' });

ReactDOM.render(
  <ErrorBoundary>
    <App history={history} />
  </ErrorBoundary>,
  document.getElementById('root'),
);

serviceWorker.unregister();
