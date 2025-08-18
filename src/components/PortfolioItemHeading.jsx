import { Link, useMatch } from "react-router-dom";
import Icon from "./Icon";

export default function PortfolioItemHeading({ title, org, dates, desc }) {
  // Matches if the current path starts with /portfolio/archive/
  const isArchive = useMatch("/portfolio/archive/:itemId");
  return (
    <div className="project__intro">
      <h1>{isArchive && (`Archive / `)}Project - {title}</h1>
      {isArchive && (
        <div className="back-link">
          <Link to="/portfolio/archive">
            <Icon name="arrow-left-long" />
            Back to Archive
          </Link>
        </div>
      )}
      <p className="subheader subheader-org">{org}</p>
      <p className="subheader subheader-dates">{dates}</p>
      <p className="subheader subheader-desc">{desc}</p>
    </div>
  );
}
