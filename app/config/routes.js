/* global require process */
require('../assets/css/font-awesome.min.css');
require('../assets/css/bootstrap.min.css');
require('../styles/main.scss');

var React = require('react');
var NavBar = require('../components/navigation/NavBar.js');
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from '../reducers/reducers.js';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import {persistStore, autoRehydrate} from 'redux-persist';
import {Example} from '../containers/Example/ExampleContainer.jsx';

let store;
if (process.env.NODE_ENV === 'development') {
  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), autoRehydrate());  
} else {
  store = createStore(rootReducer, undefined, autoRehydrate());
}




// record a state of white listed reducers to localStorage
persistStore(store, {whitelist: ['exampleState'], keyPrefix: 'boilerplate-uncle:'});

store.subscribe(() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('store update: ', store.getState());
  }
});

export const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={NavBar}>
        <IndexRedirect to="/main"/>
          <Route path="/main" component={Example}/>
          <Route path="/alternate" component={Example}/>
      </Route>
    </Router>
  </Provider>

);
