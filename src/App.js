import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login'
import Timeline from './pages/Timeline'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" Component={Login} exact/>
          <Route path="/timeline" Component={Timeline} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
