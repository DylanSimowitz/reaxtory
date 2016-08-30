import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/modules/App';

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./components/modules/App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    ReactDOM.render(
      <AppContainer>
         <App />
      </AppContainer>,
      rootEl
    );
  });
}
