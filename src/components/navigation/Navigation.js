import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
    return (<div>
      <nav style={{ display: "flex", justifyContent: "flex-end", paddingRight: '20px' }}>
        <p className='f3 link dim black underline pa3 pointer' 
        onClick={() => onRouteChange('signout')}>Sign Out</p>
      </nav>
    </div>)
    } else {
      return(
      <nav style={{ display: "flex", justifyContent: "flex-end", paddingRight: '20px' }}>
        <p className='f3 link dim black underline pa3 pointer' 
        onClick={() => onRouteChange('signin')}>Sign In</p>
        <p className='f3 link dim black underline pa3 pointer' 
        onClick={() => onRouteChange('register')}>Register</p>
      </nav>)
    }
};

export default Navigation;
