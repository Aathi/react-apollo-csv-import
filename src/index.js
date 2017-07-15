import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import HomePage from './components/home';
import './index.css';

registerServiceWorker();

const Root = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </App>
  </BrowserRouter>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

