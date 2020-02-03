import React from 'react';

import '../css/animate.css';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordrepeat: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordRepeatChange = this.handlePasswordRepeatChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handlePasswordRepeatChange(e) {
    this.setState({
      passwordrepeat: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="jumbotron d-flex align-items-center vh-100" style={{backgroundColor:"#247BA0"}}>
        <div className="container" >
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-6 animated fadeIn" style={{backgroundColor:"#70C1B3",padding:20,borderRadius:15,paddingTop:40}}>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" style={{color:"white"}}>Name</label>
                  <input
                    className="form-control"
                    onChange={this.handleNameChange}
                    value={this.state.name}
                    type="text"
                    id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" style={{color:"white"}}>Email</label>
                  <input
                    className="form-control"
                    onChange={this.handleEmailChange}
                    value={this.state.email}
                    type="email"
                    id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password" style={{color:"white"}}>Password</label>
                  <input
                    className="form-control"
                    onChange={this.handlePasswordChange}
                    value={this.state.password}
                    type="password"
                    id="password" />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordrepeat" style={{color:"white"}}>Password Repeat</label>
                  <input
                    className="form-control"
                    onChange={this.handlePasswordRepeatChange}
                    value={this.state.passwordrepeat}
                    type="password"
                    id="passwordrepeat" />
                </div>
                <input type="submit" className="btn btn-block" style={{backgroundColor:"#FF1654",color:"white"}} value="Sign up" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterPage;