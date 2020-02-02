import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
            <Route exact path="/home" component={HomePage} />
						<Route exact path="/about" component={AboutPage} />
						<Route  path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
