import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/pricing" exact component={Pricing} />
                </Switch>
            </StylesProvider>
        </BrowserRouter>
    );
}