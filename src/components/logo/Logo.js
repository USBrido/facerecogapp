import React from "react";
import Tilt from "react-tilt";
import './Logo.css'
import brain from './logo.png';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-3"
        options={{ max: 25, perspective: 10000 }}
        style={{ height: 250, width: 250 }}>
        <div className="Tilt-inner"> < img alt='logo' src={brain}/> </div>
      </Tilt>
    </div>
  );
};

export default Logo;
