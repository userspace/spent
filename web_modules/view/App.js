import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from 'view';

var App = ({children}) =>
    <div >
      <Menu />
      {children}
    </div>

export default App
