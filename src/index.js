import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import { unregister } from './registerServiceWorker';

window.renderBrowse = (containerId, history, user) => {
  ReactDOM.render(
    <App history={history} user={user} />,
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountBrowse = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
