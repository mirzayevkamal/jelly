import { useEffect, useState } from "react";
import CollectionWide from "../../components/collection-wide";
import AuthJelly from "../../Providers/AuthProvider";

import "./index.css";

export default function LandingPage() {
  const auth = AuthJelly.useContainer();

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

  const [height, setHeight] = useState(82);

  useEffect(() => {
    if (auth.isAdmin && window.innerWidth > 1500) {
      setHeight(84);
      document.querySelector(".main-container").style.gridTemplateRows =
        "112px auto 36px";
    } else if (!auth.isAdmin && window.innerWidth > 1500) {
      setHeight(88);
      document.querySelector(".main-container").style.gridTemplateRows =
        "75px auto 36px";
    } else if (!auth.isAdmin && window.innerWidth < 1500) {
      setHeight(87);
      document.querySelector(".main-container").style.gridTemplateRows =
        "75px auto 36px";
    } else {
      setHeight(87);
      document.querySelector(".main-container").style.gridTemplateRows =
        "75px auto 36px";
    }
  }, [auth.isAdmin, window.innerWidth]);

  // useEffect(() => {
  //   console.log("inn wid", window.innerWidth);
  //   if (window.innerWidth < 1500) {
  //     setHeight(77);
  //   }
  // }, [window.innerWidth]);

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
            height={`calc(${height}vh / ${data.length})`}
          />
        );
      })}
    </div>
  );
}
