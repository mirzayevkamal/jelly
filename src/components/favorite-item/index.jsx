import { Link } from "react-router-dom";
import "./index.css";

var converter = require("number-to-words");

export default function FavoriteItem(props) {
  return (
    <div className="favorite-item">
      <div className="favorite-item__details">
        <Link to={`/collections/${props.collection}/${props.name}`}>
          <img alt="" src="./images/item.png" />
        </Link>
        <div className="favorite-item__properties">
          <h1>
            <Link to={`/collections/${props.collection}/${props.name}`}>
              {props.name} <span>ID-{props.id}</span>
            </Link>
          </h1>
          <p>
            Collection:<span>{props.collection}</span>
          </p>
          <p>
            Color:<span>{props.color}</span>
          </p>
          <p>
            Materials:<span>{props.materials}</span>
          </p>
          <p>
            Rarity:
            <span>
              {converter.toWords(props.rarity)} [{props.rarity}]
            </span>
          </p>
        </div>
      </div>
      <div className="favorite-item__actions">
        <button>Sell</button>
        <button>Inspect</button>
        <button>Show on blockchain</button>
      </div>
    </div>
  );
}
