import React from "react";
import { useSiteData } from "react-static";

import Brand from "./Brand";
import { cleanPhone } from "../utils/text";


export default () => {
    const { address, phoneLA, phoneMoscow, email } = useSiteData();

    return (
        <footer id="app-footer">
            <div className="container">
                <div className="footer-inner inner-padding plain-text">
                    <div className="address-box">{address}</div>

                    <div className="contact-box">
                        <div className="phones">
                            {phoneLA &&
                            <a href={`tel:+${cleanPhone(phoneLA)}`} className="phone">{phoneLA}</a>}

                            {phoneMoscow &&
                            <a href={`tel:+${cleanPhone(phoneMoscow)}`} className="phone">{phoneMoscow}</a>}
                        </div>

                        <span>{"    •    "}</span>

                        <a href={`mailto:${email}`} className="email">{email}</a>
                    </div>
                    <Brand />
                </div>
            </div>
        </footer>
    )
}
