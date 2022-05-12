import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../Button";

import Selected from "../../assets/selected.svg";

import styles from "./ItemsSelector.module.scss";

function ScrollContainer({ items, onButtonClick }) {
    const [selected, setSelected] = useState([]);

    function updateSelected(id) {
        var arr = selected.slice(0);
        arr.includes(id) ? arr.splice(arr.indexOf(id), 1) : arr.push(id);
        setSelected(arr);
    }

    return (
        <div className={styles.itemSelector}>
            <div className={styles.wrapper}>{ items.map((item, i) => 
                <div key={i} onClick={() => updateSelected(i)} className={`${styles.card} ${selected.includes(i) ? styles.active : ""} ${item.text ? "" : styles.card__text}`}>
                    { selected.includes(i) && <img className={styles.selected} src={Selected} /> }
                    <img className={`${styles.icon} ${item.text ? styles.icon__text : ""}`} src={item.icon}/>
                    { item.text && <p>{item.text}</p> }
                </div>
            )}</div>
            <Button onClick={() => onButtonClick(selected)} disabled={selected.length == 0 ? true : false}>Continue</Button>
        </div>
    );
}

ScrollContainer.propTypes = {
    items: PropTypes.array,
    onButtonClick: PropTypes.func
};

export default ScrollContainer;