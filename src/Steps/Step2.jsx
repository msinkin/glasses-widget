import React from "react";
import PropTypes from "prop-types";

import ImageCard from "../components/ImageCard";
import Template from "../components/Template";

import { men, women } from "../images";

function Step2({ nextStep, data, update }) {
    var gender = men;
    switch (data["gender"]) {
    case "4": gender = men; break;
    case "5": gender = women; break;
    }
    return (
        <Template title="What type of glasses are \nyou looking for?" footer="I want to see both" footerClick={() => { update("eyewear_type"); nextStep() }}>
            <ImageCard size="large" onClick={() => { update("eyewear_type", "210"); nextStep() }} icon={gender.eyeglasses} text="Eyeglasses" />
            <ImageCard size="large" onClick={() => { update("eyewear_type", "211"); nextStep() }} icon={gender.sunglasses} text="Sunglasses" />
        </Template>
    );
}

Step2.propTypes = {
    nextStep: PropTypes.func,
    data: PropTypes.object,
    update: PropTypes.func
};

export default Step2;