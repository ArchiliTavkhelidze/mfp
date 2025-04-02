import React from "react";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

export default () => {
    return (<BrowserRouter>
        <div>
            <Header />
            <div>
                <h1>Container</h1>
                <hr />
                <MarketingApp />
            </div>
        </div>
    </BrowserRouter>);
}