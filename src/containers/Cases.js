import React, { Fragment } from "react";
import { useRouteData } from "react-static";

import Header from "../components/Header";
import Footer from "../components/Footer";
// import BackLink from "../components/BackLink";
// import ContactBlock from "../components/blocks/Contact";
import CaseReview from "../components/CaseReview";
// import CaseTile from "../components/CaseTile";


export default function Cases() {
    const { page, cases } = useRouteData();
    return (
        <Fragment>
            <Header />

            <main id="app-main">
                <div id="case-reviews">
                    <div className="container">
                        <div className="text-container inner-padding">
                            <h1 className="cases-label">{page.title}</h1>
                            <p className="plain-text">{page.desc}</p>
                        </div>

                        <ul className="case-reviews-list">
                            {cases.filter(caseObj => caseObj.show_in_review_block).map(caseData => {
                                return (
                                    <CaseReview {...caseData} key={caseData.title} />
                                )
                            })}
                        </ul>

                        <div className="text-container inner-padding">
                            <a className="link-to-other"
                               href="https://readymag.com/4taps/975059/" target="_blank" rel="noreferrer">
                                Other cases
                            </a>
                        </div>
                    </div>
                </div>

                {/*<div id="case-tiles">*/}
                {/*    <div className="container">*/}
                {/*        <ul className="case-tiles-list">*/}
                {/*            {cases.filter(caseObj => !caseObj.show_in_review_block).map(caseData => {*/}
                {/*                return (*/}
                {/*                    <CaseTile {...caseData} key={caseData.title} />*/}
                {/*                )*/}
                {/*            })}*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<ContactBlock />*/}
                {/*<BackLink />*/}
            </main>

            <Footer />
        </Fragment>
    )
}
