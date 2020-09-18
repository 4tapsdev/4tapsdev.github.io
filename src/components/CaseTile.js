import React from "react";

import ExactNavLink from "./ExactNavLink";


export default ({ title, icon, short_desc, background, url }) => {
    return (
        <li className="case-tile" style={{background: background}}>
            <ExactNavLink className="case-tile-link" to={url} />
            <div className="case-tile-inner">
                <div className="case-tile-head">
                    <div className="case-tile-icon">
                        <img src={icon} alt="case-icon" />
                    </div>
                    <h3 className="case-tile-title">{title}</h3>
                </div>

                <div className="case-tile-desc">{short_desc}</div>
            </div>
        </li>
    )
}
