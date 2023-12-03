import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectURLParam, useURLParams } from "../slice/stepSlice";

import SideImageCard from "../components/SideImageCard";
import Template from "../components/Template";

import { man, woman } from "../images";

function Step6({ nextStep }) {
    const [setURLParam, deleteURLParam] = useURLParams();
    const value = useSelector(selectURLParam("gender"));

    var gender = { "4": man, "5": woman }[value] || man;

    return (
        <Template title="Every face shape has a \nperfect fit. What's yours?" footer="I don't know" footerClick={() => { deleteURLParam("face_shape"); nextStep() }}>
            <SideImageCard onClick={() => { setURLParam("face_shape", "long"); nextStep() }} text="I have a long face" icon={gender.long} />
            <SideImageCard onClick={() => { setURLParam("face_shape", "round"); nextStep() }} text="I have a round face" icon={gender.round} />
            <SideImageCard onClick={() => { setURLParam("face_shape", "between"); nextStep() }} text="In between" icon={gender.between} />
        </Template>
    );
}

Step6.propTypes = {
    nextStep: PropTypes.func
};

export default Step6;