import React from "react";
import { useRouteData } from "react-static";

import { Link } from "../components/Router";
// import BackLink from "../components/BackLink";
import CaseTile from "../components/CaseTile";
import routes from "../constants/routes";
import { shuffle } from "../utils/helpers";


export default function Case() {
    const { page, tiles_block, cases } = useRouteData();
    const exclude_self = cases.filter(caseObj => caseObj.title !== page.title);
    const tile_cases = shuffle(exclude_self).slice(0, 2);

    return (
        <main id="app-main">
            <div id="case">
                <div className="case-head" style={{background: page.background}}>
                    <div className="container">
                        <div className="case-inner inner-padding-left">
                            <div className="case-head-back-wrap">
                                <Link className="case-head-back" to={routes.cases.all}>
                                    <svg className="case-head-arrow" viewBox="0 0 30 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L2 12M2 12L12 22M2 12H28.5" stroke="#0094FF"
                                              strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div className="case-head-back-text">Back to all cases</div>
                                </Link>
                            </div>

                            <div className="case-head-left">
                                <div className="case-head-box">
                                    <div className="case-icon">
                                        <img src={page.icon} alt="case-icon" />
                                    </div>
                                    <h1 className="case-title">{page.title}</h1>
                                </div>

                                <div className="case-desc-box">
                                    <div className="case-short-desc">{page.short_desc}</div>
                                    <div className="case-desc">{page.desc}</div>
                                </div>

                                <div className="case-links-box">
                                    {page.appstore &&
                                    <a href={page.appstore} className="store app-store" target="_blank" rel="noreferrer">
                                        <img src="/images/appstore.png" alt="app store" />
                                    </a>}
                                    {page.appstore &&
                                    <a href={page.googleplay} className="store google-play" target="_blank" rel="noreferrer">
                                        <img src="/images/googleplay.png" alt="google play" />
                                    </a>}
                                    {page.website &&
                                    <div className="website">
                                        <a href={page.website} target="_blank" rel="noreferrer">
                                            {(new URL(page.website)).hostname}
                                        </a>
                                    </div>}
                                </div>
                            </div>

                            <div className="case-head-right">
                                <img className="case-img"
                                     src={page.image_page[0].path}
                                     srcSet={`${page.image_page[0].path}, ${page.image_page[1].path} 2x`}
                                     alt={page.title} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="case-body">
                    <div className="container">
                        <div className="inner-padding-left">
                            <div className="case-body-inner text-container" dangerouslySetInnerHTML={page.body} />
                        </div>
                    </div>
                </div>
            </div>

            <div id="case-tiles">
                <div className="container">
                    <div className="inner-padding">
                        <h3 className="section-label">{tiles_block.title}</h3>
                    </div>

                    <ul className="case-tiles-list">
                        {tile_cases.map(caseData => {
                            return (
                                <CaseTile {...caseData} key={caseData.title} />
                            )
                        })}
                    </ul>
                </div>
            </div>

            {/*<BackLink />*/}
        </main>
    )
}
