import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectURLParam, useURLParams } from "../slice/stepSlice";

import ImageCard from "../components/ImageCard";
import Template from "../components/Template";

import { man, woman } from "../images";

function Step2({ nextStep }) {
    const [setURLParam, deleteURLParam] = useURLParams();
    const value = useSelector(selectURLParam("gender"));

    var gender = { "4": man, "5": woman }[value] || man;
    
    return (
        <Template title="What type of glasses are \nyou looking for?" footer="I want to see both" footerClick={() => { deleteURLParam("eyewear_type"); nextStep() }}>
            <ImageCard size="large" onClick={() => { setURLParam("eyewear_type", "210"); nextStep() }} icon={gender.eyeglasses} text="Eyeglasses" />
            <ImageCard size="large" onClick={() => { setURLParam("eyewear_type", "211"); nextStep() }} icon={gender.sunglasses} text="Sunglasses" />
        </Template>
    );
}

Step2.propTypes = {
    nextStep: PropTypes.func
};

export default Step2;