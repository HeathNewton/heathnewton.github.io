import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProjectImage from "./ProjectImage";

export default function PortfolioItem({
  item,
  title,
  dates,
  desc,
  isArchive = false,
}) {
  const blockRef = useRef(null);
  useEffect(() => {
    const block = blockRef.current;
    if (!block) return;
    const link = block.querySelector("a");
    if (!link) return;
    let down = null;
    const handlePointerDown = (e) => {
      if (e.button === 0) {
        down = Date.now();
      }
    };
    const handlePointerUp = (e) => {
      if (e.button === 0) {
        const up = Date.now();
        if (up - down < 200) {
          if (e.ctrlKey || e.metaKey) {
            const href = link.getAttribute("href");
            window.open(href, "_blank");
          } else {
            link.click();
          }
        }
      }
    };
    block.addEventListener("pointerdown", handlePointerDown);
    block.addEventListener("pointerup", handlePointerUp);
    block.style.cursor = "pointer";
    //cleanup
    return () => {
      block.removeEventListener("pointerdown", handlePointerDown);
      block.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);
  return (
    <div ref={blockRef} className={`portfolio-item portfolio-item-${item}`}>
      <h2>
        <Link to={`/portfolio${isArchive ? "/archive" : ""}/${item}`}>
          {title}
        </Link>
      </h2>
      <div className="portfolio-item__thumbnail">
        <ProjectImage project={item} page="landing" thumbnail={true} />
      </div>
      <div className="portfolio-item__dates">{dates}</div>
      <div className="portfolio-item__description">{desc}</div>
    </div>
  );
}
