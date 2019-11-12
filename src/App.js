import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SubApp from './SubApp';
class App extends Component {
  constructor(){
    super();
    this.state = {brand : 'VW'}
  }
  update = (changedBrand) =>{
   this.setState({brand: changedBrand});
   console.log('state changed');
  }

  handleParentChng = ()=> {
     let changedBrand = 'RAM'
     this.update(changedBrand);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>{this.state.brand}</h3>
        </div>
         <button onClick={this.handleParentChng} >Parent State Change</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SubApp cust='demo-sample' update={this.update}/>
      </div>
      
    );
  }
}

export default App;
