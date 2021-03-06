import React, { useState } from "react";


export default ({ block, steps }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const handleStepChange = (i) => {
        setCurrentStep(i);
    }

    return (
        <section id="process-section">
            <div className="container">
                <div className="inner-padding">
                    <div className="process-inner">
                        <h2 className="section-label">{block.title}</h2>

                        <p className="plain-text">{block.desc}</p>

                        <div className="hint">
                            <svg className="hint-icon" width="16" height="17" viewBox="0 0 16 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.7197 10.9258L15.8622 16.0682C16.0459 16.252 16.0459 16.55 15.8622 16.7338C15.6784 16.9175 15.3804 16.9175 15.1967 16.7338L10.0542 11.5913L8.43693 15.6346C8.27852 16.0306 7.7172 16.0285 7.56177 15.6313L5.06869 9.26011C4.79638 9.31448 4.51758 9.34217 4.2353 9.34217C1.89621 9.34217 0 7.44596 0 5.10688C0 2.76779 1.89621 0.871582 4.2353 0.871582C6.57439 0.871582 8.47059 2.76779 8.47059 5.10688C8.47059 5.38916 8.44291 5.66796 8.38853 5.94028L14.7597 8.43335C15.1569 8.58878 15.159 9.1501 14.763 9.30851L10.7197 10.9258ZM7.52942 5.10688C7.52942 3.28759 6.05459 1.81276 4.2353 1.81276C2.416 1.81276 0.941177 3.28759 0.941177 5.10688C0.941177 6.92617 2.416 8.40099 4.2353 8.40099C4.39846 8.40099 4.55991 8.38917 4.71877 8.36583L3.32647 4.80777C3.17694 4.42562 3.55405 4.04852 3.93619 4.19806L7.49426 5.59034C7.51759 5.43148 7.52942 5.27004 7.52942 5.10688ZM4.5949 5.46648L8.00481 14.1807L9.44543 10.5792C9.49326 10.4596 9.588 10.3648 9.70758 10.317L13.3091 8.87639L4.5949 5.46648Z"
                                    fill="black"/>
                            </svg>

                            <div className="hint-text">{block.hint}</div>
                        </div>

                        <ul className="steps">
                            {steps.map((item, i) => {
                                const classes = i === currentStep ? "step selected" : "step";
                                return (
                                    <li className={classes}
                                        key={item.title}
                                        onClick={() => handleStepChange(i)}
                                        onMouseEnter={() => handleStepChange(i)}>

                                        <div className="step-inner">
                                            <h3 className="step-title plain-text">{item.title}</h3>
                                            <p className="step-desc">{item.desc}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
