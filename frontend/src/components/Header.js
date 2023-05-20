import React from "react";




function Header(){

  return(

    //Navbar
      <nav className="navbar navbar-expand-lg navbar-light nav-bg "
      id="mainNav">
      <div className="container">
          <a className="navbar-brand text-white"href="/"> Water For All  </a>
          <button className="navbar-toggler navbar-toggler-right"type="button"
          data-toggle="collapse"data-target="#myNavbar"aria-controls="myNavbar"aria-expanded="false"aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"id="myNavbar">
            <ul className="navbar-nav ml-auto my-10 my-lg-0">
                <li className="nav-item"><a className="nav-link" href="#">ABOUT</a></li>
                <li className="nav-item"><a className="nav-link" href="#">VOLUNTEER</a></li>
                <li className="nav-item"><a className="nav-link" href="/add">PROJECTS</a></li>
                <li className="nav-item"><a className="nav-link" href="#">PATNERSHIP</a></li>
                <li className="nav-item"><a className="nav-link" href="#">DONATION</a></li>
            </ul>
        </div>
      </div>
        </nav>

   //End of Navbar


  )


    
}



export default Header;
