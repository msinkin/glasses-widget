import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectURL } from "../../slice/stepSlice";

import Gift from "../../assets/gift.svg";
import Button from "../Button";

import styles from "./End.module.scss";

function End() {
    const url = useSelector(selectURL);

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <img className={styles.gift} src={Gift} />
                <h1 className={styles.title}>We&apos;ve found some awesome frames for you!</h1>
                <p className={styles.desc}>Send the results to your email to receive special discounts.</p>
                <Button onClick={() => console.log(`URL: ${url}`)}>Send</Button>
            </div>
            <footer className={styles.footer}>By clicking &apos;Send&apos; you agree to our Terms of Use & Privacy Policy and receiving promotion emails</footer>
        </div>
    );
}

End.propTypes = {
    generateURL: PropTypes.func
};

export default End;