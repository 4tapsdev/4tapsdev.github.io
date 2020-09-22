import React, { Fragment } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";


export default () => (
    <Fragment>
        <Header />
        <main id="app-main">
            <h1 className="title-404">404</h1>
            <p className="plain-text">Oh no's! We couldn't find that page :(</p>
        </main>
        <Footer />
    </Fragment>
)
