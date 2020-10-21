import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../style/Style.css";
import { DetailContext } from "../contexts/DetailProvider";

const NavBar = () => {
  const { fetchSeries } = useContext(DetailContext);

  return (
    <header>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/shows" onClick={() => fetchSeries()}>
          TV Series
        </Link>
        <Link to="/channels">Channels</Link>
      </nav>
    </header>
  );
};
export default NavBar;
