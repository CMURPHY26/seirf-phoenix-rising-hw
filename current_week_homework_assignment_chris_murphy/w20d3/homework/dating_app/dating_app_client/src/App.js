import React from 'react';
import './App.css';
import Daters from './components/Hello'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Hello Dating World</h1>
      </div>
      <div className="container">
        <div className="left-daters">
          <Daters />
        </div>
        <div className="main">
            <div className="match">

            </div>
        </div>
        <div className="right-daters">
          <Daters />
        </div>
      </div>
      <div className="footer">
        <Form />
      </div>
    </div>
  );
}

export default App;
