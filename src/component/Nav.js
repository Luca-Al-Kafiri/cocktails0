import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Nav = () => {
  const { count, setCount } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreedesignfile.com%2Fupload%2F2016%2F02%2FHand-drawn-cocktail-vintage-vector-01.jpg"
            alt="cocktail db logo"
            className="logo"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link onClick={() => setCount(count + 1)} to="/random">
              Surprise me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
