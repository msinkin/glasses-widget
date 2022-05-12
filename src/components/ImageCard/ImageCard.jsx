import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageCard.module.scss";

function ImageCard({ text, icon, onClick }) {
    return (
        <div onClick={onClick} className={styles.card}>
            <img className={styles.icon} src={icon}/>
            <p>{text}</p>
        </div>
    );
}

ImageCard.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func
};

export default ImageCard;