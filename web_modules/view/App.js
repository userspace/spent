import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from 'view';

var App = ({children}) =>
    <div className="container">
      <Menu />
      {children}
    </div>

export default App
