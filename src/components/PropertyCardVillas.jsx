import ImageCarousel from "./ImageCarousel";
import { Link } from "react-router-dom";

function PropertyCardVillas({ item }) {
  return (
    <div className="property-card">
      <ImageCarousel images={item.images} />

      <div className="property-content">
        <h3>{item.title}</h3>

        <p>{item.location}</p>

        <span>{item.price}</span>

        <Link to="/villa-booking" className="reserve-btn">
            Book now
        </Link>
      </div>
    </div>
  );
}

export default PropertyCardVillas;