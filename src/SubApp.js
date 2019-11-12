import React, { Component } from 'react';
 import './SubApp.css';

class SubApp extends Component{
 
 handleChng = () => {
     let brandVal = 'suzuki'
     //this.setState({brand: brandVal})
     this.props.update(brandVal)
 }

    render(){
        return (<div className='subCompContent'>
            Hello Sub Component...
            {this.props.cust}
            <button onClick={this.handleChng}>Child State Change</button>
        </div>)
    }
}

export default SubApp;