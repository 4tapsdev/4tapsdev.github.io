import React, { useEffect, useCallback } from "react";
import { useLocation } from "@reach/router";


export default (props) => {
    const location = useLocation();

    const scrollToElement = useCallback(() => {
        const element = document.getElementById(location.hash.replace("#", ""));
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });

            // styles not loaded yet
            if (element.getBoundingClientRect().top === 0) {
                requestAnimationFrame(scrollToElement)
            }
        }
    }, [location.hash]);

    useEffect(() => {
        if (!location.hash) return

        requestAnimationFrame(scrollToElement);
    }, [location]);

    return props.children || null
}
