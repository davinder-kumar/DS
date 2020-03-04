import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import * from './Containers/UserRegistration/UserRegistration'
import Linkedlist from './Containers/Linkedlist/Linkedlist'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path="/linked" component={Linkedlist} />
          <Route path="/user-register-form" component={} />
      </BrowserRouter>
    </div>
  );
}

export default App;
