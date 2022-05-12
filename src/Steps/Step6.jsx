import React from "react";
import PropTypes from "prop-types";

import SideImageCard from "../components/SideImageCard";
import Template from "../components/Template";

import { men, women } from "../images";

function Step6({ nextStep, data, update }) {
    var gender = men;
    switch (data["gender"]) {
    case "4": gender = men; break;
    case "5": gender = women; break;
    }

    return (
        <Template title="Every face shape has a \nperfect fit. What's yours?" footer="I don't know" footerClick={() => { update("face_shape"); nextStep() }}>
            <SideImageCard onClick={() => { update("face_shape", "long"); nextStep() }} text="I have a long face" icon={gender.long} />
            <SideImageCard onClick={() => { update("face_shape", "round"); nextStep() }} text="I have a round face" icon={gender.round} />
            <SideImageCard onClick={() => { update("face_shape", "between"); nextStep() }} text="In between" icon={gender.between} />
        </Template>
    );
}

Step6.propTypes = {
    nextStep: PropTypes.func,
    data: PropTypes.object,
    update: PropTypes.func
};

export default Step6;