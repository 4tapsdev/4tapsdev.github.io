import React, { useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "@reach/router";


export default (props) => {
    const navigate = useNavigate();
    const { href, state } = useLocation();

    const updateState = useCallback(() => {
        navigate(href, {
            state: { ...state, scrolled: true },
            replace: true,
        }).then(() => window.scrollTo({
            top: 0,
            behavior: "smooth"
        }));
    }, [href, state, navigate]);

    // Mark the page as scrolled on first mount
    useEffect(updateState, []);

    useEffect(() => {
        if (state && !state.scrolled) {
            updateState();
        }
    }, [state, updateState]);

    return (
        <div id="app-page">
            <div id="app-content">
                {props.children}
            </div>
        </div>
    )
}
