import { Link } from "react-router-dom";
import "./index.css";

export default function CollectionWide(props) {
  console.log(props);
  return (
    <div
      style={{
        background: `url(${props.image})`,
        height: `${props.height}`,
      }}
      className="collection-wide"
    >
      <Link className="collection-wide__link" to={props.link}>
        <div className="collection-wide__cover">
          <p className="collection-wide__text-headline">{props.name}</p>
          <p className="collection-wide__text-detail">Collection</p>
        </div>
      </Link>
    </div>
  );
}
