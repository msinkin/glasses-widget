import React from "react";
import PropTypes from "prop-types";

import Logo from "../../assets/logo.svg";
import Arrow from "../../assets/arrow_right.svg";
import Back from "../../assets/back.svg";
import Exit from "../../assets/exit.svg";

import styles from "./Navbar.module.scss";

function Navbar({ currentStepName, nextStep, previousStep, firstStep }) {
    const num = parseFloat(currentStepName.replace("#", ""));
    const step = isNaN(num) ? false : Math.floor(num);

    var left = { icon: Back, action: previousStep };
    var right = { icon: Exit, action: firstStep };

    switch (currentStepName) {
    case "start": right = { icon: Arrow, action: nextStep }; left = { icon: Logo, action: () => {} }; break;
    case "end": left = { icon: Logo, action: () => {} }; break;
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.inner}>
                <img alt="logo" className={styles.icon} src={left.icon} onClick={left.action}/>
                <p className={styles.counter}>{step ? `${step}/10` : ""}</p>
                <img alt="action" className={styles.icon} src={right.icon} onClick={right.action}/>
            </div>
            {
                (step || currentStepName == "end") &&
                <div className={styles.bg}>
                    <div className={styles.fill} style={{width: `${(currentStepName == "end" ? 11 : step) / 11 * 100}%`}}/>
                </div>
            }
        </nav>
    );
}

Navbar.propTypes = {
    currentStepName: PropTypes.string,
    nextStep: PropTypes.func,
    previousStep: PropTypes.func,
    firstStep: PropTypes.func
};

export default Navbar;