import React from "react";
import { navigate } from "@reach/router";

import { colors } from "../constants/styles";


const BackLink = props => {
    const goBack = () => {
        navigate(-1);
        // navigate('../', { state: { isBack: true } }); // https://reach.tech/router/api/navigate
    }

    return (
        <div onClick={goBack} className={props.children ? props.className : "back-link-cross"}>
            {props.children ||
            <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.636719" y="21.3334" width="30.1699" height="3.77123" rx="1"
                      transform="rotate(-45 0.636719 21.3334)" fill={colors.blue} />
                <rect x="3.30273" y="6.10352e-05" width="30.1699" height="3.77123" rx="1"
                      transform="rotate(45 3.30273 6.10352e-05)" fill={colors.blue} />
            </svg>}
        </div>
    )}

export default BackLink;
