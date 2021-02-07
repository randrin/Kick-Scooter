import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import routers from "./routes/routes";
import "./kick-scooter.scss";
import KickScooterHeader from "./components/KickScooterHeader";
import KickScooterFooter from "./components/KickScooterFooter";
import KickScooterScrollToTop from "./components/KickScooterScrollToTop";
import KickScooterMobile from "./components/KickScooterMobile";
import KickScooterNewsletters from "./components/KickScooterNewsletters";
import SigninModalScreen from "./screens/store/auth/SigninModalScreen";

ReactDOM.render(
  <React.StrictMode>
    <div className="page-wrapper">
      <BrowserRouter>
        <KickScooterHeader />
        <Route component={routers} />
        <KickScooterFooter />
      </BrowserRouter>
    </div>
    <KickScooterScrollToTop />
    <KickScooterMobile />
    <SigninModalScreen />
    <KickScooterNewsletters />
  </React.StrictMode>,
  document.getElementById("kick-scooter")
);
