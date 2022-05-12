import React from "react";
import PropTypes from "prop-types";

import ImageCard from "../components/ImageCard";
import Template from "../components/Template";

import Women from "../assets/women.svg";
import Men from "../assets/men.svg";

function Step1({ nextStep, update }) {
    return (
        <Template title="You are looking for" footer="I'd like to see both" footerClick={() => { update("gender"); nextStep() }}>
            <ImageCard onClick={() => { update("gender", "5"); nextStep() }} icon={Women} text="Women's Styles" />
            <ImageCard onClick={() => { update("gender", "4"); nextStep() }} icon={Men} text="Men's Styles" />
        </Template>
    );
}

Step1.propTypes = {
    nextStep: PropTypes.func,
    update: PropTypes.func
};

export default Step1;