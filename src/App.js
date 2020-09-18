import React from "react";
import { Root, Routes } from "react-static";

import { Router } from "components/Router";
import ScrollToTop from "./components/ScrollToTop";

import "css/vendor/normalize.css";
import "css/root.scss";
import "fonts/fonts";


function App(props) {
    return (
        <Root>
            <ScrollToTop>
                <React.Suspense fallback={<em>Loading...</em>}>
                    <Router>
                        <Routes path="*" />
                    </Router>
                </React.Suspense>
            </ScrollToTop>
        </Root>
    )
}

export default App
