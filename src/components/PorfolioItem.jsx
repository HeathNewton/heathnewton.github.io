import { Link } from "react-router-dom";

export default function PortfolioItem({
  item,
  title,
  dates,
  desc,
  isArchive = false,
}) {
  return (
    <li className={`project-item project-item-${item}`}>
      <h2>
        <Link to={`/portfolio${isArchive ? "/archive" : ""}/${item}`}>
          {title}
        </Link>
      </h2>
      <div className="project-item__thumbnail">
        <img src={`/assets/images/${item}/landing-t.jpg`} alt="" />
      </div>
      <div className="project-item__dates">{dates}</div>
      <div className="project-item__description">{desc}</div>
    </li>
  );
}
