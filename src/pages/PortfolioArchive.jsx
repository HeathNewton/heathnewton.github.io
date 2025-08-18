import { Link } from "react-router-dom";
import PortfolioItem from "../components/PorfolioItem";

export default function PortfolioArchive() {
  return (
    <main id="portfolio-archive">
      <div className="main-inner">
        <h1>Portfolio / Archive</h1>
        <p>Here are some of the projects I contributed to from 2014 to 2018</p>
        <ul className="projects-list grid nobm" role="list">
          <PortfolioItem
            item="open-polytechnic"
            title="Open Polytech Website Refresh"
            dates="July 2018 to November 2018"
            desc="The Open Polytechnic wanted to refresh the look and feel of their website."
            isArchive={true}
          />
          <PortfolioItem
            item="business-invoices"
            title="NZ Post Business Invoices"
            dates="December 2016 to August 2017"
            desc="This functionality was to enable businesses to pay invoices online rather than by mailing a cheque."
            isArchive={true}
          />
          <PortfolioItem
            item="svg-icons"
            title="SVG Icon Sprite"
            dates="Ongoing from February 2016"
            desc="Establishing an SVG icon system using the SVG Sprite technique."
            isArchive={true}
          />
          <PortfolioItem
            item="youshop"
            title="YouShop Consolidation"
            dates="August to December 2014"
            desc="Building an interface to allow users to consolidate multiple YouShop parcels."
            isArchive={true}
          />
        </ul>
      </div>
    </main>
  );
}
