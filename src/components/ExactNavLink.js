import React from "react";
import { useLocation } from "@reach/router";

import { Link } from "./Router";


const isActive = (classes='') => {
    return ({ isCurrent }) => {
        return isCurrent ? { className: `${classes} active`.trim() } : { className: classes }
    }}

const ExactNavLink = props => {
    const location = useLocation();
    const exact = props.to === (location.pathname + location.hash);

    return (
        <Link getProps={isActive(props.className)}
              replace={exact}
              {...props} />
    )}

export default ExactNavLink;
