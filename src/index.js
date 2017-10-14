import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';


import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component{
  render(){
    return <div> Hello </div>
  }
}
class Bai extends React.Component{
  render(){
    return <div> Bai </div>
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    
    <BrowserRouter >
      <div>
        <Route path="/h" component={Hello} />
        <Route path="/g" component={Bai} />
      </div>
    </BrowserRouter >
  
  </Provider>
  , document.querySelector('.container'));
