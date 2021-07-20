import "./index.css";
import { Link } from "react-router-dom";

export default function CollectionItemAdmin(props) {
  return (
    <div className="collection-itemAdmin">
      <div className="collection-itemAdmin__image">
        <Link to={`/collections/${props.collection}/${props.name}`}>
          <img alt="" src="./images/item.png"></img>
        </Link>
      </div>
      <div className="collection-itemAdmin__details">
        <Link to={`/collections/${props.collection}/${props.name}`}>
          {props.name}
        </Link>
        <div className="collection-itemAdmin__collection-name">
          {props.collection}
        </div>
        <div className="collection-itemAdmin__availability">
          Currently available:
          <span>{props.available ? "Yes" : "No"} </span>
        </div>
        {props.available && (
          <div className="collection-itemAdmin__price">
            Price:
            <span>3 ETH // ${props.price}</span>
          </div>
        )}
      </div>
    </div>
  );
}
