import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//redux-promise is middleware, it sees the action,
//looks up the payload property. If it's a promise,
//it stops the action entirely and once the request
//finishes, it dispatches a new action of the same
//type but with a payload of the resolved request.
//Allows for clean code that is not overly complex
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
