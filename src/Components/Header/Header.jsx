import React, { useState } from "react";
import "./Header.css";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { IconButton } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
import SearchIcon from "@material-ui/icons/Search";

function Header({ isOpen, setOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div onClick={() => scroll.scrollToTop()} className="nav-logo">
          nullBrains.
        </div>

        <ul className="navMenu">
          <li className="navItem">
            <Link smooth={true} duration={1000} to="home" className="navLinks">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link
              smooth={true}
              duration={1000}
              to="features"
              offset={-80}
              className="navLinks"
            >
              Features
            </Link>
          </li>
          <li className="navItem">
            <Link
              smooth={true}
              duration={1000}
              offset={-80}
              to="blog"
              className="navLinks"
            >
              Blog
            </Link>
          </li>
          <li className="navItem">
            <Link
              smooth={true}
              duration={1000}
              to="footer"
              className="navLinks"
            >
              Contact
            </Link>
          </li>
          <SearchIcon />
        </ul>

        <div className="mobileIcons">
          <IconButton onClick={() => setOpen(true)}>
            <MenuOpenIcon
              style={{ position: "absolute", top: "-1rem" }}
              fontSize="large"
            />
          </IconButton>
        </div>

        <div className="navBtn">
          <Button variant="contained" color="primary">
            Signin
          </Button>
          <Button variant="contained" color="primary">
            Signup
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
