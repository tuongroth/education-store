// Import BestSellingBook CSS
import './BestSellingBook.css';

// Import TitleTypeTwo component
import TitleTypeTwo from '../../Ui/TitleTypeTwo/TitleTypeTwo';
import { GoArrowRight } from "react-icons/go";

// Import TreeShape image
import TreeShape from '../../assets/treeShape.png';

// Import selling books data
import { sellingBooksData } from '../../Data/Data';

// Import Link from react-router-dom
import { Link } from 'react-router-dom';

export default function BestSellingBook() {
  return (
    <section className="BestSellingBook">
      {/* Tree Shape Image */}
      <div className="treeShape">
        <img src={TreeShape} alt="Decorative tree shape" />
      </div>

      {/* Map over sellingBooksData to render each book */}
      {sellingBooksData.map(({ img, infoTitle, infoTitleTop, desc, price, shopbtnLink }, index) => (
        <div className="container bestselling-container" key={index}>
          {/* Left side - book image */}
          <div className="selling-book-left">
            <img src={img} alt={infoTitle} />
          </div>

          {/* Right side - book details */}
          <div className="selling-book-right">
            <TitleTypeTwo title="Best selling book" />
            <div><small>{infoTitleTop}</small></div>
            <h3>{infoTitle}</h3>
            <p>{desc}</p>
            <h5><span>{price}</span></h5>
            <Link to={shopbtnLink} className="btn">
              <small>Shop it now<GoArrowRight />
</small>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
