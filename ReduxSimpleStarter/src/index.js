import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() { return <div><strong>Hello!</strong></div> }
}

class Goodbye extends React.Component {
  render() { return <div><strong>Goodbye!</strong></div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <h4>This is my Router</h4>
          <div>
            - /hello<br/>
            - /goodbye<br/>
          </div>
          <br/><br/>
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
