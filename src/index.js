import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { About } from './components/About';
import Admin from './containers/Admin';
import Timers from './containers/Timers';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Timers} />
        <Route path="about" component={About} />
        <Route path="timers" component={Timers} />
        <Route path="admin" component={Admin} />
      </Route>
      <Redirect from="*" to="/"/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
