'use strict';
import './login.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import Header from '../header/header';

var request = require('ajax-request');
var $ = require('jquery');
var jsonp = require('jsonp');

class Login extends React.Component {
	handleClick() {

	    // $.ajax({
	    //     type: 'GET',
	    //     url: 'http://www.keeponmovin.loc/api/v2/user-authorize',
	    //     data: {
	    //     	email:'damir.trputec@trikoder.net'
	    //     },
    	// 	jsonpCallback: 'callback',
	    //     crossDomain: true,
	    // 	}).success(function(data) {
	    // 		console.log(data);
	    // 	});

	}

	handleEmailChange (e) {
	   this.setState({email: e.target.value});
	}

	render () {
		return (
		  <div className="login-wrapper">
		  	<Header />
		  	<input type="email" placeholder="test@trikoder.net" onChange={this.handleEmailChange}/>
		  	<Link onClick={this.handleClick} to={'/app'}>Login</Link>
		  </div>
		);
	}
}

export default Login;