import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/layout/App';
import { Provider } from 'mobx-react';
import UiStore from 'stores/UI';
import PostStore from 'stores/Post';

const uiStore = new UiStore()
const postStore = new PostStore(uiStore)

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <Provider uiStore={uiStore} postStore={postStore}>
      <App/>
    </Provider>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./components/layout/App', () => {
    ReactDOM.render(
      <AppContainer>
        <Provider uiStore={uiStore} postStore={postStore}>
          <App/>
        </Provider>
      </AppContainer>,
      rootEl
    );
  });
}
