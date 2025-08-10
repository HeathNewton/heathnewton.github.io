import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="app-title">
          <span className="app-title__name">Brian Milne</span>
          <span className="app-title__position">Front-end web developer</span>
        </div>
        <nav aria-labelledby="main-nav-title">
          <span id="main-nav-title" hidden>
            Main
          </span>
          <ul className="nobm" role="list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Résumé</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
