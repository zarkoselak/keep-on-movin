'use strict';
import './header.scss';

import React from 'react';

class Header extends React.Component {
  render () {
    return (
    	<header className="header">
    		<div className="header-wrapper">
    			<img src={require('../../images/logo.png')} />
    			<h1>Keep on movin'</h1>
    		</div>
    	</header>
    );
  }
}

export default Header;