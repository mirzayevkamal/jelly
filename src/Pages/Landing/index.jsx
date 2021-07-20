import { Link } from "react-router-dom";

import "./index.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page__block">
        <Link to="/collections/flutter">
          <div className="landing-page__cover-1">
            <div className="landing-page__text">
              <p className="landing-page__text-headline">Flutter</p>
              <p className="landing-page__text-detail">Collection</p>
            </div>
          </div>
          <img alt="" src="./images/flutter.svg"></img>
        </Link>
      </div>
      <div className="landing-page__logo">
        <img alt="" src="./images/logo.svg"></img>
      </div>
      <div className="landing-page__block">
        <Link to="/collections/butterfly">
          <div className="landing-page__cover-2">
            <div className="landing-page__text">
              <p className="landing-page__text-headline">Butterfly</p>
              <p className="landing-page__text-detail">Collection</p>
            </div>
          </div>
          <img alt="" src="./images/butterfly.svg"></img>
        </Link>
      </div>
    </div>
  );
}
