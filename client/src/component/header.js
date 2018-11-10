import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div>
		 <nav className="navbar navbar-expand-lg navbar-light mynav" style={{backgroundColor: "rgb(0,0,0)", position: "fixed",height: "50px",borderRadius: "0"}}>
		 <a className="navbar-brand h3" style={{color: "red" , fontWeight: "bolder"}} href="#">Maze Problem</a>
		 
		 </nav>
	   
			
	</div>

  );
  }
}

export default Header;
