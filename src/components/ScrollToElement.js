import anime from "animejs";
import React, { useEffect, useCallback } from "react";
import { useLocation } from "@reach/router";


export default (props) => {
    const location = useLocation();

    const scrollToElement = useCallback(() => {
        const scrollElement = (
            window.document.scrollingElement ||
            window.document.body ||
            window.document.documentElement
        );

        const element = document.getElementById(location.hash.replace("#", ""));
        if (element) {
            const elementOffset = element.getBoundingClientRect().top
            const scrollPosition = window.scrollY
            const documentTop = document.documentElement.clientTop
            const scrollOffset = elementOffset + scrollPosition - documentTop

            anime({
                targets: scrollElement,
                scrollTop: scrollOffset,
                duration: 600,
                easing: 'easeOutCubic'
            });

            // styles not loaded yet
            if (scrollPosition === 0) {
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
