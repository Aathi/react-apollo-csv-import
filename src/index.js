import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import { 
  ApolloProvider, 
  ApolloClient, 
  createNetworkInterface 
} from 'react-apollo'
import App from './App';
import HomePage from './components/home';
import NavBar from './components/nav';
import './index.css';
injectTapEventPlugin();
registerServiceWorker();

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj4s93qw9tyxc017969gq5632'
});
const client = new ApolloClient({networkInterface})


const Root = () => (
  <ApolloProvider client={client}>
    <MuiThemeProvider>
        <BrowserRouter>
          <App>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </App>
        </BrowserRouter>
    </MuiThemeProvider>
  </ApolloProvider>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

