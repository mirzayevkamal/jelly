import CollectionItem from "../../components/collection-item";
import CollectionItemAdmin from "../../components/collection-item-admin";
import "./index.css";

export default function AdminPage() {
  const items = [
    {
      id: 1,
      name: "SIMP SHIRT NO-1ORANGE-WHITE",
      price: 1000,
      collection: "butterfly",
      available: false,
    },
    {
      id: 2,
      name: "SIMP SHIRT NO-1ORANGE-WHITE",
      price: 4600,
      collection: "flutter",
      available: true,
    },
    {
      id: 3,
      name: "SIMP SHIRT NO-1ORANGE-WHITE",
      price: 180,
      collection: "butterfly",
      available: false,
    },
    {
      id: 4,
      name: "SIMP SHIRT NO-1ORANGE-WHITE",
      price: 105,
      collection: "flutter",
      available: true,
    },
    {
      id: 5,
      name: "SIMP SHIRT NO-1ORANGE-WHITE",
      price: 76,
      collection: "butterfly",
      available: true,
    },
  ];
  return (
    <div className="admin-page">
      {items.map((item) => {
        return (
          <CollectionItemAdmin
            name={item.name}
            collection={item.collection}
            available={item.available}
            price={item.price}
          />
        );
      })}
    </div>
  );
}
