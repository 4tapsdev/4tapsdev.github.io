import React from "react";

import { createMarkup } from "../../utils/text";


export default ({ block, advantages, specialties }) => (
    <section id="about-section">
        <div className="container">
            <div className="inner-padding-left">
                <div className="about-inner text-container">
                    <h2 className="section-label">
                        {block.title}
                    </h2>

                    <ul className="advantages">
                        {advantages.map(item => {
                            return (
                                <li className="advantage" key={item.data}>
                                    <h3 className="advantage-data">{item.data}</h3>
                                    <div className="advantage-desc">{item.desc}</div>
                                </li>
                            )
                        })}
                    </ul>

                    {block.contents &&
                    <div className="about-text" dangerouslySetInnerHTML={createMarkup(block.contents)} />}
                </div>
            </div>

            <div className="specialty-inner">
                <ul className="specialties">
                    {specialties.map(item => {
                        return (
                            <li className="specialty" key={item.title}>
                                <div className={`specialty-icon ${item.icon_class}`}></div>
                                <h3 className="specialty-title">{item.title}</h3>
                                <div className="specialty-trend">{item.trend}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </section>
)
