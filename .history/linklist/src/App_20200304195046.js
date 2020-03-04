import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import UserRegistration from './Containers/UserRegistration/UserRegistration'
import Linkedlist from './Containers/Linkedlist/Linkedlist'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/user-register" component={UserRegistration} />
          <Route path="/" component={Linkedlist} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
