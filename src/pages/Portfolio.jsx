import { Link, Outlet } from "react-router-dom";

export default function Portfolio() {
  return (
    <main id="portfolio">
      <div className="main-inner">
        <h1>Portfolio</h1>
        <div className="archive-link">
          <Link to="/portfolio/archive">Archive</Link>
        </div>
      </div>
    </main>
  );
}
