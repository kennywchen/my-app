import React from "react";
import './navbar.css'
import { Link } from "react-scroll";
import 'animate.css'


function NavBar(){
    return(
        <div className="animate__animated animate__fadeInLeft navbar">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                home
              </Link>
            </li>
          </ul>
          <ul>
            <li id="experience-nav">  
              <Link
                activeClass="active"
                to="Experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                experiences
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="Experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                projects
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="Experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
  );
}

export default NavBar;

