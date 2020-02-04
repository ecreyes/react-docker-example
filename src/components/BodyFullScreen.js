import React from 'react';

const myStyle = {
  containerBackground: {
    backgroundColor: "#247BA0",
    margin: 0
  }
}

function BodyFullScreen(props) {
  return (
    <div className="jumbotron d-flex align-items-center vh-100" style={myStyle.containerBackground}>
      {props.children}
    </div>
  );
}

export default BodyFullScreen;