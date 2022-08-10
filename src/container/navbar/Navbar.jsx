import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { BiAlignLeft } from "react-icons/bi";
import "./navbar.scss";
import logo from "../../assets/loho2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="webshop__navbar">
      <div className="webshop__navbar-links">
        <div className="webshop__navbar-links_logo">
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" />{" "}
          </Link>
        </div>
        <div className="webshop__navbar-links_container">
          <p>
            {" "}
            <Link to="/">Home</Link>{" "}
          </p>
          <p>
            {" "}
            <Link to="/tech">Technology</Link>{" "}
          </p>
          <p>
            {" "}
            <Link to="/fash">Fashion</Link>{" "}
          </p>
          <p>
            {" "}
            <Link to="/crypto">Crypto</Link>{" "}
          </p>
          <p>
            {" "}
            <Link to="/videoG">Video Games</Link>{" "}
          </p>
        </div>
      </div>
      <div className="webshop__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="webshop__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <BiAlignLeft
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="webshop__navbar-menu_container">
            <div className="webshop__navbar-menu_container-links animate-item">
              <p>
                {" "}
                <Link to="/">Home</Link>{" "}
              </p>
              <p>
                {" "}
                <Link to="/tech">Technology</Link>{" "}
              </p>
              <p>
                {" "}
                <Link to="/fash">Fashion</Link>{" "}
              </p>
              <p>
                {" "}
                <Link to="/crypto">Crypto</Link>{" "}
              </p>
              <p>
                {" "}
                <Link to="/videoG">Video Games</Link>{" "}
              </p>
            </div>
            <div className="webshop__navbar-menu_container-links-sign animate-item">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
