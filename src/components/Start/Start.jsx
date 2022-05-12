import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import Preview from "../../assets/preview.png";

import styles from "./Start.module.scss";

function Start({ nextStep }) {
    return (
        <div className={styles.wrapper}>
            <img className={styles.preview} src={Preview} />
            <h1 className={styles.title}>Let&apos;s find your perfect pair!</h1>
            <p className={styles.desc}>Take the quiz to easily discover your perfect fit from thousands of styles</p>
            <Button onClick={nextStep}>Start Now</Button>
        </div>
    );
}

Start.propTypes = {
    nextStep: PropTypes.func
};

export default Start;