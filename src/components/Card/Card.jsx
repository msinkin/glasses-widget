import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

function Card({ text, size, onClick }) {
    return (
        <div onClick={onClick} className={`${styles.card} ${styles[size]}`}>
            <p>{text}</p>
        </div>
    );
}

Card.propTypes = {
    text: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func
};

export default Card;