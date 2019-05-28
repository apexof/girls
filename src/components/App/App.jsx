import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import DetailGirl from "../../pages/DetailGirl/DetailGirl";
import SearchGirls from "../../pages/SearchGirls/SearchGirls";
import GetWhatsUp from "../../pages/GetWhatsUp/GetWhatsUp";
import "./App.scss";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={Home}
                />
                <Route
                    path="/girls"
                    exact
                    component={SearchGirls}
                />
                <Route
                    path="/girls/:girlId"
                    exact
                    component={DetailGirl}
                />
                <Route
                    path="/get-whats-up/:girlId"
                    exact
                    component={GetWhatsUp}
                />
            </Switch>
        </HashRouter>
    );
}
export default App;
