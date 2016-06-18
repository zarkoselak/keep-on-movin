'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header/header';
import Content from './components/content/content';

class App extends React.Component {
  render () {
    return (
      <div className="app-wrapper">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;