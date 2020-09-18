import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import ExactNavLink from "./ExactNavLink";
// import Brand from "./Brand";
import HeaderMenu from "./HeaderMenu";
import menuItems from "../constants/menu";
import routes from "../constants/routes";


export default () => {
    const [isTop, setIsTop] = useState(typeof window !== 'undefined' ? window.scrollY === 0 : false);

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const currentIsTop = currPos.y === 0 || (currPos.y < 100 && prevPos.y > currPos.y);
            if (currentIsTop !== isTop) setIsTop(currentIsTop)
        },
        [isTop],
        null,
        true,
        60
    )

    return (
        <header id="app-header" className={isTop ? "header-on-top" : ""}>
            <div className="container">
                <div className="header-inner">
                    {/*<Brand />*/}

                    <div className="brand-box">
                        <ExactNavLink className="brand" to={routes.home}></ExactNavLink>
                    </div>

                    <div className="menu-box">
                        <HeaderMenu isTop={isTop} items={menuItems} />

                        <nav className="menu main-menu">
                            <ul>
                                {menuItems.map(item => {
                                    return (
                                        <li key={item.title} className={item.classes}>
                                            <ExactNavLink to={item.url}>{item.title}</ExactNavLink>}
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
};
