'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header/header';

class App extends React.Component {
  render () {
    return (
      <div className="app-wrapper">
        <Header />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));