import React, { useEffect } from "react";

import ExactNavLink from "./ExactNavLink";
import { useClickOutside } from "../hooks/useClickOutside";


const HeaderMenu = ({ isTop, items }) => {
    const [dropdownRef, isOpen, setIsOpen] = useClickOutside();
    let menuClasses = 'menu header-menu';
    if (isOpen) menuClasses += ' header-menu-open';

    useEffect(() => {
        // close if we scroll for top while menu is open
        if (isTop) setIsOpen(false);
    }, [isTop]);

    return (
        <div className={menuClasses} ref={dropdownRef}>
            <div id="header-menu-button"
                 aria-haspopup="true"
                 aria-expanded={isOpen}
                 onClick={() => setIsOpen(!isOpen)}>
                <div className="burger"></div>
            </div>

            <ul className="header-menu-window" role="menu" aria-labelledby="header-menu-button">
                {items.map(item => {
                    return (
                        <li key={item.title} role="presentation">
                            <ExactNavLink to={item.url} role="menuitem">{item.title}</ExactNavLink>}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default HeaderMenu;
