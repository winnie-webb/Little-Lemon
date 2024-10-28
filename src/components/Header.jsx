import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <section>
        <div>
          <h2>Little Lemon</h2>
          <h3>In the middle of nowhere</h3>
          <p>Just a lil restaurant</p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
