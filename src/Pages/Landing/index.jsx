import { Link } from "react-router-dom";
import CollectionWide from "../../components/collection-wide";

import "./index.css";

export default function LandingPage() {
  const data = [
    {
      id: 1,
      name: "Flutter",
      image: "./images/flutter-wide.svg",
      link: "/collections/flutter",
    },
    {
      id: 2,
      name: "Butterfly",
      image: "./images/butterfly-wide.svg",
      link: "/collections/butterfly",
    },
    {
      id: 3,
      name: "Teardrop",
      image: "./images/teardrop-wide.svg",
      link: "/collections/teardrop",
    },
    {
      id: 4,
      name: "Cloud",
      image: "./images/cloud-wide.svg",
      link: "/collections/cloud",
    },
  ];

  return (
    // <div className="landing-page">
    //   <div className="landing-page__block">
    //     <Link to="/collections/flutter">
    //       <div className="landing-page__cover-1">
    //         <div className="landing-page__text">
    //           <p className="landing-page__text-headline">Flutter</p>
    //           <p className="landing-page__text-detail">Collection</p>
    //         </div>
    //       </div>
    //       <img alt="" src="./images/flutter.svg"></img>
    //     </Link>
    //   </div>
    //   <div className="landing-page__logo">
    //     <img alt="" src="./images/logo.svg"></img>
    //   </div>
    //   <div className="landing-page__block">
    //     <Link to="/collections/butterfly">
    //       <div className="landing-page__cover-2">
    //         <div className="landing-page__text">
    //           <p className="landing-page__text-headline">Butterfly</p>
    //           <p className="landing-page__text-detail">Collection</p>
    //         </div>
    //       </div>
    //       <img alt="" src="./images/butterfly.svg"></img>
    //     </Link>
    //   </div>
    // </div>

    <div className="landing-wide">
      {data.map((item) => {
        return (
          <CollectionWide
            link={item.link}
            name={item.name}
            image={item.image}
            height={`calc(78vh / ${data.length})`}
          />
        );
      })}
    </div>
  );
}
