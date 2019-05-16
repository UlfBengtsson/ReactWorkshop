import React from "react";

const HeaderNav = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="#">
        React Ex.
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="https://reactjs.org/">
            ReactJS
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.taniarascia.com/getting-started-with-react/"
          >
            Tania Rascia
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.robinwieruch.de/categories/react/"
          >
            Robin Wieruch
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.youtube.com/watch?v=Ke90Tje7VS0&t=1559s"
          >
            Mosh Hamedani
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
