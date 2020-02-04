import React from 'react';
import userAvatar from '../images/user.png';
import '../css/animate.css';

const myStyle = {
  formCard: { backgroundColor: "#70C1B3", padding: 20, borderRadius: 15, paddingTop: 40 },
  myLabelColor: {
    color: "white"
  },
  divMiddlePosition: { width: 100, height: 100, position: "absolute", borderRadius: 30, top: -60, zIndex: 10 },
  submitButton: { backgroundColor: "#FF1654", color: "white", borderRadius: 15 }
}

function CardSession(props) {
  return (
    <div className="container" style={{ marginTop: 50 }}>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-4 animated fadeIn" style={myStyle.formCard}>
          <h2 className="d-flex align-items-center flex-column" style={myStyle.myLabelColor}>{props.title}</h2>
          <form onSubmit={props.onSubmit}>
            <div className="d-flex justify-content-center">
              <div style={myStyle.divMiddlePosition}>
                <img src={userAvatar} alt="icon user sign up" width="100" height="100" />
              </div>
            </div>
            {props.children}
            <input type="submit" className="btn btn-block" style={myStyle.submitButton} value={props.send} />
          </form>
        </div>
      </div>
    </div>
  );
}
export default CardSession;