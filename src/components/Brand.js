import React from "react";

import ExactNavLink from "./ExactNavLink";
import routes from "../constants/routes";

import brand from "../images/brand.svg";


export default () => (
    <div className="brand-box">
        <ExactNavLink className="brand" to={routes.home}>
            <img src={brand} alt="brand" />
        </ExactNavLink>
    </div>
)
