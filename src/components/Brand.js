import React from "react";

import ExactNavLink from "./ExactNavLink";
import routes from "../constants/routes";


export default () => (
    <div className="brand-box">
        <ExactNavLink className="brand" to={routes.home}>
            <img src="/images/brand.svg" alt="brand" />
        </ExactNavLink>
    </div>
)
