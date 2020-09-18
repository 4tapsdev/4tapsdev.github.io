import React from "react";

import { Link } from "../Router";
import CaseReview from "../CaseReview";
import routes from "../../constants/routes";


export default ({ block, cases }) => {
    return (
        <section id="cases-section">
            <div className="container">
                <div className="cases-inner">
                    <div className="inner-padding">
                        <h2 className="section-label">{block.title}</h2>
                        <p className="plain-text">{block.desc}</p>
                    </div>

                    <ul className="cases">
                        {cases.map(caseData => {
                            return (
                                <CaseReview {...caseData} key={caseData.title} />
                            )
                        })}
                    </ul>

                    <div className="button-wrapper">
                        <Link to={routes.cases.all} className="btn btn-border">
                            {"All cases"}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
