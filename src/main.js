import 'babel-polyfill';

import Root from 'Root'
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {watchLogin} from 'userspace-sdk-js'

injectTapEventPlugin();
watchLogin(localStorage);

ReactDOM.render(
  <Root />,
  document.getElementById('react-view')
);
