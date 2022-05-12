import React from "react";
import PropTypes from "prop-types";

import styles from "./Template.module.scss";

function Template({ title, subtitle, footer, children, footerClick }) {
    const lines = title.split("\\n");

    return (
        <div className={styles.content}>
            <h2 className={styles.title} style={{ margin: subtitle ? "30px 0 10px 0" : "50px 0 32px 0" }}>{
                lines.map((line, i) => [line, <br key={i}/>])
            }</h2>
            {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
            <div className={styles.elements}>{children}</div>
            {footer && <p onClick={footerClick} className={styles.footer}>{footer}</p> }
        </div>
    );
}

Template.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    footer: PropTypes.string,
    children: PropTypes.node,
    footerClick: PropTypes.func
};

export default Template;