import React from "react";

import ExactNavLink from "./ExactNavLink";
import routes from "../constants/routes";
import { BRAND_URL } from "../constants/conf";


export default () => (
    <div className="brand-box">
        <ExactNavLink className="brand" to={routes.home}>
            <img src={BRAND_URL} alt="brand" />
        </ExactNavLink>
    </div>
)
