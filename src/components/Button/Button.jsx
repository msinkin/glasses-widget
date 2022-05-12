import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

function Button({ children, onClick, disabled }) {
    return <button className={styles.button} disabled={disabled} onClick={(event) => { event.target.blur(); onClick(event) } }>{children}</button>;
}

Button.propTypes = {
    children: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

export default Button;