import React from "react";

import ExactNavLink from "./ExactNavLink";


export default (props) => {
    const {
        title,
        icon,
        short_desc,
        background,
        image_review,
        image_review_mobile,
        mobile_centrize,
        reviewer,
        reviewer_position,
        review_body,
        url
    } = props;

    let imgClasses = "case-img";
    if (mobile_centrize) imgClasses += " centrize-mobile";

    return (
        <li className="case-review" style={{background: background}}>
            <ExactNavLink className="case-review-link" to={url} />
            <div className="case-review-left">
                <div className="case-head-box">
                    <div className="case-icon">
                        <img src={icon} alt="case-icon" />
                    </div>
                    <h3 className="case-title">{title}</h3>
                </div>
                <div className="case-desc-box">
                    <div className="case-desc">{short_desc}</div>
                </div>

                {review_body &&
                <div className="case-review-box">
                    <div className="review-body">{review_body}</div>
                    <div className="review-person">
                        <div className="reviewer">{reviewer}</div>
                        <div className="reviewer-position">{reviewer_position}</div>
                    </div>
                </div>}
            </div>

            <div className="case-review-right">
                <picture>
                    <source media="(min-width: 620px)"
                            srcSet={`${image_review[0].path} 1x, ${image_review[1].path} 2x`} />
                    <source media="(max-width: 619px)"
                            srcSet={`${image_review_mobile[0].path} 1x, ${image_review_mobile[1].path} 2x`} />
                    <img src={image_review[0].path} alt={title} className={imgClasses} />
                </picture>
            </div>
        </li>
    )
}
