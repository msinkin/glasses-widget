import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Like from "../../assets/like.svg";

import styles from "./Congrats.module.scss";

function Congrats({ isActive, nextStep, text }) {
    const [timeout, setTime] = useState(null);

    useEffect(() => {
        if (isActive && !timeout) {
            setTime(setTimeout(() => nextStep(), 2000));
        } else if (!isActive && timeout) {
            clearTimeout(timeout);
            setTime(null);
        }
    }, [isActive, nextStep, timeout, setTime]);

    return (
        <div className={styles.congrats}>
            <img alt="like" src={Like} className={styles.like}/>
            <h1 className={styles.title}>{text}</h1>
        </div>
    );
}

Congrats.propTypes = {
    isActive: PropTypes.bool,
    nextStep: PropTypes.func,
    text: PropTypes.string
};

export default Congrats;