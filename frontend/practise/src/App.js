import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'; 
import Signin from './components/Signin';

class App extends Component {

  render(){
  return (
      <div className="App">
        <h1 style={{display:"inline-block", border:"1px solid", borderRadius:"3px", marginTop:"30px", boxShadow:"-10px 10px lightBlue" }}><b>POPULAR GROUPS</b></h1>
        <h4 style={{display:"inline-block", marginLeft:"10px", color:"gray"}}><b>UPCOMING EVENTS...</b></h4>
        <Signin></Signin>
    </div>
  );
  }
}

export default App;
