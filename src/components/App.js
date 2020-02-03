import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import RegisterPage from '../pages/RegisterPage';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
            <Route exact path="/register" component={RegisterPage} />
						<Route  path="/" component={RegisterPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
