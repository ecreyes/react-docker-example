import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
						<Route  path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
