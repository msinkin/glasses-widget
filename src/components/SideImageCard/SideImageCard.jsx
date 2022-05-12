import React from "react";
import PropTypes from "prop-types";

import Separator from "../../assets/separator.svg";

import styles from "./SideImageCard.module.scss";

function SideImageCard({ icon, text, onClick }) {
    return (
        <div onClick={onClick} className={`${styles.card}`}>
            <img className={styles.icon} src={icon} />
            <img className={styles.separator} src={Separator} alt="separator" />
            <p className={styles.text}>{text}</p>
        </div>
    );
}

SideImageCard.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default SideImageCard;