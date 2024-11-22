import React, { useState } from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navigation">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navs">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/casestudies">CaseStudies</Link>
          </li>
        </ul>
      </div>
        <div className="social-media-icons">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </div>

      {/* humbger icon  */}
      <div>
        {open ? (
          <img
            src="./images/Humberger-02.png"
            onClick={() => setOpen(false)}
            className="icon"
            />
          ) : (
            <img
            src="./images/Humberger-01.png"
            alt=""
            onClick={() => setOpen(true)}
            className="icon"
          />
        )}
      </div>

      {/* mobile menu  */}
      {open && (
           <div className="Mobile-menu">
           <ul>
             <li>
               {" "}
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/testimonials">Testimonials</Link>
             </li>
             <li>
               <Link to="/casestudies">CaseStudies</Link>
             </li>
           </ul>
         </div>
      )}
  
    </div>
  );
};

export default Header;
