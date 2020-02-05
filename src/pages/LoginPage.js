import React, { useState } from 'react';

//components
import BodyFullScreen from '../components/BodyFullScreen';
import CardSession from '../components/CardSession';

const myStyle = {
  myLabelColor: {
    color: "white"
  }
}

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let state = {
      email,
      password
    }
    console.log(state);
  }

  return (
    <BodyFullScreen>
      <CardSession onSubmit={onSubmit} title="Sign in!" send="Login" route="/register" routeText="if you don't have an account, Sign up here!!">
        <div className="form-group">
          <label htmlFor="email" style={myStyle.myLabelColor}>Email</label>
          <input
            onChange={handleEmailChange}
            className="form-control"
            value={email}
            type="email"
            id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={myStyle.myLabelColor}>Password</label>
          <input
            onChange={handlePasswordChange}
            className="form-control"
            value={password}
            type="password"
            id="password" />
        </div>
      </CardSession>
    </BodyFullScreen>
  );
}

export default LoginPage;