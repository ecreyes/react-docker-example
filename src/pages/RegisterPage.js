import React from 'react';
//styles and icons
import '../css/animate.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import userAvatar from '../images/user.png';

const registerStyle = {
  containerBackground: {
    backgroundColor: "#247BA0",
    margin: 0
  },
  submitButton:{ backgroundColor: "#FF1654", color: "white", borderRadius: 15 },
  myLabelColor:{
    color:"white"
  },
  divMiddlePosition:{ width: 100, height: 100, position: "absolute", borderRadius: 30, top: -60, zIndex: 10 },
  formCard:{ backgroundColor: "#70C1B3", padding: 20, borderRadius: 15, paddingTop: 40 }
}

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
      <div className="jumbotron d-flex align-items-center vh-100" style={registerStyle.containerBackground}>
        <div className="container" style={{ marginTop: 50 }} >
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-4 animated fadeIn" style={registerStyle.formCard}>
              <h2 className="d-flex align-items-center flex-column" style={registerStyle.myLabelColor}>Sign up now!</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="d-flex justify-content-center">
                  <div style={registerStyle.divMiddlePosition}>
                    <img src={userAvatar} alt="icon user sign up" width="100" height="100" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name" style={registerStyle.myLabelColor}>Name</label>
                  <input
                    className="form-control"
                    onChange={this.handleNameChange}
                    value={this.state.name}
                    type="text"
                    id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" style={registerStyle.myLabelColor}>Email</label>
                  <input
                    className="form-control"
                    onChange={this.handleEmailChange}
                    value={this.state.email}
                    type="email"
                    id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password" style={registerStyle.myLabelColor}>Password</label>
                  <input
                    className="form-control"
                    onChange={this.handlePasswordChange}
                    value={this.state.password}
                    type="password"
                    id="password" />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordrepeat" style={registerStyle.myLabelColor}>Password Repeat</label>
                  <input
                    className="form-control"
                    onChange={this.handlePasswordRepeatChange}
                    value={this.state.passwordrepeat}
                    type="password"
                    id="passwordrepeat" />
                </div>
                <input type="submit" className="btn btn-block" style={registerStyle.submitButton} value="Sign up" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterPage;