import { useLocation } from "react-router";

import CollectionItem from "../../../components/collection-item";
import "./index.css";

export default function CollectionsPage() {
  const location = useLocation();
  const query = location.pathname.split("/")[2];

  const items = [
    {
      id: 1,
      name: "SIMP SHIRT NO-1ORANGE-WHITE",
      price: 1000,
      collection: "butterfly",
    },
    {
      id: 2,
      name: "SIMP SHIRT NO-1ORANGE-WHITE",
      price: 4600,
      collection: "flutter",
    },
    {
      id: 3,
      name: "SIMP SHIRT NO-1ORANGE-WHITE",
      price: 180,
      collection: "butterfly",
    },
    {
      id: 4,
      name: "SIMP SHIRT NO-1ORANGE-WHITE",
      price: 105,
      collection: "flutter",
    },
    {
      id: 5,
      name: "SIMP SHIRT NO-1ORANGE-WHITE",
      price: 76,
      collection: "butterfly",
    },
  ];

  return (
    <div className="collections">
      <div
        className="collections__header"
        style={{ backgroundImage: `url(./images/collection-cover.svg)` }}
      >
        <div className="collections__cover">
          <div className="collections__headline">{query.toUpperCase()}</div>
          <div className="colelctions__detail">Collection</div>
        </div>
      </div>
      <div className="collections__items">
        {items
          .filter((item) => item.collection === query)
          .map((item) => {
            return (
              <CollectionItem
                key={item.id}
                name={item.name}
                collection={item.collection}
                price={item.price}
              />
            );
          })}
      </div>
    </div>
  );
}
