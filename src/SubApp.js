import React, { Component } from 'react';
 import './SubApp.css';

class SubApp extends Component{
 constructor(){
     super();
     this.state = {subbrand: ''}
 }

 handleChng = () => {
     let brandVal = 'suzuki'
     this.props.update(brandVal)
 }

 handlInpChange = (e) => {
     this.setState({subbrand: e.target.value})
    this.props.update(this.state.subbrand);
 }

    render(){
        return (<div className='subCompContent'>
            Hello Sub Component...
            {this.props.cust}
            <button onClick={this.handleChng}>Child State Change</button>
            <input value={this.state.subbrand} onChange={this.handlInpChange} />
        </div>)
    }
}

export default SubApp;