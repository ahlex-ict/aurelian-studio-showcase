import { Link } from "react-router-dom";

interface PortfolioCardProps {
  id: string;
  title: string;
  image: string;
  className?: string;
}

const PortfolioCard = ({ id, title, image, className = "" }: PortfolioCardProps) => {
  return (
    <Link to={`/portfolio/${id}`} className={`portfolio-card group block ${className}`}>
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover image-zoom"
          loading="lazy"
        />
        <div className="portfolio-card-overlay" />
        <div className="portfolio-card-title">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
            Click to view
          </p>
          <h3 className="font-display text-xl md:text-2xl font-bold uppercase">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
