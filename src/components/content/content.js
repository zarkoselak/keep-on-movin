'use strict';
import './content.scss';

import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showResults: false,
            pool: false
        };
    }

    checkPool () {
		this.setState({pool: !this.state.pool});
    }

	toggleState () {
		this.setState({showResults: !this.state.showResults});
	}

  	render () {
    	return (
    		<div className="mainContent">
    			<h2>Your current seat: 53</h2>
    			<a href="javascript:void(0)" onClick={this.checkPool.bind(this)}> CHECK THE POOL </a>
    			<a href="javascript:void(0)" onClick={this.toggleState.bind(this)}>{ this.state.showResults ?  'I AM IN': 'I AM OUT' }</a>	

    			<p><b>*</b>time left to apply : <b>2d 3h 22m</b> </p>	
    		</div>
    	);
  	}
}

export default Content;