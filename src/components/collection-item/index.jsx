import "./index.css";
import { Link } from "react-router-dom";
import AuthJelly from "../../Providers/AuthProvider";

export default function CollectionItem(props) {
  const jelly = AuthJelly.useContainer();

  return (
    <div className="collection-item">
      <div className="collection-item__image">
        <Link to={`/collections/${props.collection}/${props.name}`}>
          <img alt="" src="./images/item.png"></img>
        </Link>
      </div>
      <div className="collection-item__details">
        {jelly.isAdmin ? (
          <>
            <Link to={`/collections/${props.collection}/${props.name}`}>
              {props.name}
            </Link>
            <div className="collection-item__collection-name">
              {props.collection}
            </div>
            <div className="collection-item__availability">
              Currently available:
              <span>{props.available ? "Yes" : "No"} </span>
            </div>
            <div className="collection-item__price">
              Price:
              <span>3 ETH // ${props.price}</span>
            </div>
          </>
        ) : (
          <>
            <Link to={`/collections/${props.collection}/${props.name}`}>
              {props.name}
            </Link>
            <div className="collection-item__price">${props.price}</div>
          </>
        )}
      </div>
    </div>
  );
}
