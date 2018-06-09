import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import createStore from '../../lib/store';
import ColorList from '../color-list';

const store = createStore();

export default class App extends React.Component {
  render() {
    return(
      <main className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Route exact path='/' component={ColorList}/>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}
