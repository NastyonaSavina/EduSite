import "./Header.css";

import { NavLink } from "react-router-dom";


export const Header = () => {
  

    return (
      <>
        <header className="header">
          <div className=" container  header-area">
            <NavLink to="" className="link nav-link">
              Home
            </NavLink>
            <NavLink to="/courses" className="link nav-link">
              Courses
            </NavLink>
            <NavLink to="/" className="link nav-link">
              About Us
            </NavLink>
            <NavLink to="/" className="link nav-link">
              Contact Us
            </NavLink>
          </div>
        </header>
      </>
    );
    
}