import React from "react";
import PropTypes from "prop-types";

import styles from "./SideCard.module.scss";

function SideCard({ left, right, onClick }) {
    return (
        <div onClick={onClick} className={`${styles.card}`}>
            <p className={styles.left}>{left}</p>
            <p className={styles.right}>{right}</p>
        </div>
    );
}

SideCard.propTypes = {
    left: PropTypes.string,
    right: PropTypes.string,
    onClick: PropTypes.func
};

export default SideCard;