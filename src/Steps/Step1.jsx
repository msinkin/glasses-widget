import React from "react";
import PropTypes from "prop-types";

import { useURLParams } from "../slice/stepSlice";

import ImageCard from "../components/ImageCard";
import Template from "../components/Template";

import Women from "../assets/woman/woman.svg";
import Men from "../assets/man/man.svg";

function Step1({ nextStep }) {
    const [setURLParam, deleteURLParam] = useURLParams();

    return (
        <Template title="You are looking for" footer="I'd like to see both" footerClick={() => { deleteURLParam("gender"); nextStep() }}>
            <ImageCard onClick={() => { setURLParam("gender", "5"); nextStep() }} icon={Women} text="Women's Styles" />
            <ImageCard onClick={() => { setURLParam("gender", "4"); nextStep() }} icon={Men} text="Men's Styles" />
        </Template>
    );
}

Step1.propTypes = {
    nextStep: PropTypes.func,
    update: PropTypes.func
};

export default Step1;