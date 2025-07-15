// Import TitleTypeTwo CSS
import './TitleTypeTwo.css';

// Import Victor Image
import victor from '../../assets/victor.png';

export default function TitleTypeTwo({ className, title }) {
  return (
    <div className={`titleTypeTwo ${className}`}>
      <h2>{title}</h2>
      <img
  src={victor}
  alt=""
  className="victor"
  style={{ marginLeft: 0,  }}
/>

    </div>
  );
}
