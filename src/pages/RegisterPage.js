import React, { useState } from 'react';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

//components
import BodyFullScreen from '../components/BodyFullScreen';
import CardSession from '../components/CardSession';

const myStyle = {
  myLabelColor: {
    color: "white"
  },
  errorColor: {
    color: "#FF1654"
  }
}

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordrepeat, setPasswordRepeat] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handlePasswordRepeatChange = (e) => {
    setPasswordRepeat(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let state = {
      name,
      email,
      password,
      passwordrepeat
    }
    console.log(state);
  }

  return (
    <BodyFullScreen>
      <CardSession onSubmit={onSubmit} title="Sign up!" send="Sign up">
        <div className="form-group">
          <label htmlFor="name" style={myStyle.myLabelColor}>Name</label>
          <input
            className="form-control"
            onChange={handleNameChange}
            value={name}
            type="text"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" style={myStyle.myLabelColor}>Email</label>
          <input
            className="form-control"
            onChange={handleEmailChange}
            value={email}
            type="email"
            id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={myStyle.myLabelColor}>Password</label>
          <input
            className="form-control"
            onChange={handlePasswordChange}
            value={password}
            type="password"
            id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="passwordrepeat" style={myStyle.myLabelColor}>Password Repeat</label>
          <input
            className="form-control"
            onChange={handlePasswordRepeatChange}
            value={passwordrepeat}
            type="password"
            id="passwordrepeat" />
        </div>
      </CardSession>
    </BodyFullScreen>
  )
}

export default RegisterPage;