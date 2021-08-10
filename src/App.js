import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import TopHeader from "./components/top-header";
import LandingPage from "./Pages/Landing";
import CollectionsPage from "./Pages/Landing/Collections";
import DetailView from "./Pages/Landing/Detail-view";

import "./index.css";
import Footer from "./components/footer";
import FaqPage from "./Pages/Landing/Faq";
import Modal from "./components/modal";
import MainHeader from "./components/main-header";
import AuthJelly from "./Providers/AuthProvider";
import NotFoundPage from "./Pages/Landing/404";
import AuctionToken from "./Pages/Admin/auction-token";
import MintToken from "./Pages/Admin/mint-token";
import SellToken from "./Pages/Admin/sell-token";
import StartSale from "./Pages/Admin/start-sale";
import StartAuction from "./Pages/Admin/start-auction";
import RevokeToken from "./Pages/Admin/revoke-token";
import FavoritesPage from "./Pages/User/favorites";
import AdminPage from "./Pages/Admin";
import { useEffect } from "react";

export default function App() {
  const auth = AuthJelly.useContainer();

  useEffect(() => {
    if (auth.isAdmin) {
      document.querySelector(".main-container").style.gridTemplateRows =
        "112px auto 36px";
    } else {
      document.querySelector(".main-container").style.gridTemplateRows =
        "75px auto 36px";
    }
  }, [auth.isAdmin]);

  return (
    <>
      <Router>
        <div className="main-container">
          <div className="jelly-header">
            <TopHeader />
            {auth.isAdmin && <MainHeader />}
          </div>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/collections/:collection">
              <CollectionsPage />
            </Route>
            <Route exact path="/collections/:collection/:name">
              <DetailView />
            </Route>
            <Route path="/faq">
              <FaqPage />
            </Route>
            <Route path="/favorites">
              <FavoritesPage />
            </Route>

            {auth.isLoggedIn && (
              <>
                <Route path="/profile">
                  <AdminPage />
                </Route>
                <Route path="/mint-token">
                  <MintToken />
                </Route>
                <Route path="/auction-token">
                  <AuctionToken />
                </Route>
                <Route path="/sell-token">
                  <SellToken />
                </Route>
                <Route path="/start-sale">
                  <StartSale />
                </Route>
                <Route path="/start-auction">
                  <StartAuction />
                </Route>
                <Route path="/revoke-token">
                  <RevokeToken />
                </Route>
              </>
            )}

            <Route path="/404">
              <NotFoundPage />
            </Route>
            <Redirect to="/404" />
          </Switch>
          <div className="jelly-footer">
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}
