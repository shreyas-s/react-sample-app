import React, { Component } from 'react';
// import './SubApp.css';

class SubApp extends Component{
    render(){
        return (<div>
            Hello Sub Component...
            {this.props.cust};
        </div>)
    }
}

export default SubApp;