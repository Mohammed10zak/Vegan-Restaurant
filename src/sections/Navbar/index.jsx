import "./style.css";
import logo from "./headLogo.png";
import searchIcon from "./Vector.svg";
import Form from "../../sections/Form";
import { useState } from "react";
export default function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (e) => {
    setIsShown((current) => !current);
  };
  return (
    <>
      <nav className="navBar">
        <li>
          <a href="/#contact">
            <img src={logo} alt="logo" className="logo" id="footer" />
          </a>
        </li>

        <ul>
          <li>
            <a href="/#home" className="home">
              Home
            </a>
          </li>
          <li>
            <a href="/#about" className="about">
              About us
            </a>
          </li>
          <li>
            <a href="/#special" className="special">
              Special
            </a>
          </li>
          <li>
            <a href="/#menu" className="menu">
              Menu
            </a>
          </li>
          <li>
            <a href="/#blogs" className="blogs">
              Blogs
            </a>
          </li>
          <li>
            <img src={searchIcon} alt="searchIcon" className="searchIcon" />
          </li>
        </ul>

        <li>
          <a href="/#form">
            {" "}
            <button className="book" onClick={handleClick}>
              <span className="lineB"></span>Book Now
              <span className="lineA"></span>
            </button>
          </a>
        </li>
      </nav>
      {isShown && <Form />}
    </>
  );
}
