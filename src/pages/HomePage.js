import React from 'react';

import Me from '../images/me.jpg';
import Github from '../images/github.png';

//components
import Navbar from '../components/Navbar';

const myStyle = {
  containerBackground: {
    backgroundColor: "#247BA0",
    margin: 0,
    padding: 0,
    borderRadius: 0
  },
  textColor: {
    color: "white"
  }
}

function HomePage() {
  return (
    <div style={myStyle.containerBackground}>
      <Navbar />
      <div className="jumbotron vh-100" style={myStyle.containerBackground}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <h1 className="display-4" style={myStyle.textColor}>Welcome to my site!</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 col-md-6">
              <img src={Me} alt="Eduardo Reyes Oyarzo" className="img-thumbnail animated zoomIn" style={{ borderRadius: 20 }} />
            </div>
            <div className="col-12 col-md-6">
              <p className="lead" style={myStyle.textColor}>
                Hello, My name is Eduardo Reyes and this is my site that i use to write code in ReactJs. I'm a student at university Federico Santa María from Valparaíso and i like to use Javascript frameworks  for development my apps.
              </p>
              <div className="row">
                <div className="col-6">
                  <p className="lead" style={{fontSize:32,color:"white"}}>See my github here!</p>
                </div>
                <div className="col-6">
                  <a href="https://github.com/ecreyes">
                    <img src={Github} alt="Github profile" className="rounded-circle img-thumbnail animated zoomIn" width="100" height="100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron" style={{ backgroundColor: "#FF1654", margin: 0, height: 4000, borderRadius: 0 }}></div>
    </div>
  );
}

export default HomePage;