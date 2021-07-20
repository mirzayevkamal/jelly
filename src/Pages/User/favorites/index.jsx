import "./index.css";
import FavoriteItem from "../../../components/favorite-item";

export default function FavoritesPage() {
  return (
    <div className="favorites">
      <FavoriteItem
        collection="Flutter"
        color="red"
        materials="100% Cotton"
        rarity={6}
        name="Simp shirt"
        id="1"
      />
      <FavoriteItem
        collection="Flutter"
        color="red"
        materials="100% Cotton"
        rarity={6}
        name="Simp shirt"
        id="1"
      />
      <FavoriteItem
        collection="Flutter"
        color="red"
        materials="100% Cotton"
        rarity={6}
        name="Simp shirt"
        id="1"
      />
    </div>
  );
}
