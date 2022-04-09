import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store/store';
import { Styled } from './styles/style';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Styled>

      <App />
    </Styled>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);