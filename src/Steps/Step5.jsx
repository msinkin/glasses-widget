import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectURLParam, useURLParams } from "../slice/stepSlice";

import Card from "../components/Card";
import SideImageCard from "../components/SideImageCard";
import Template from "../components/Template";

import darkShade from "../assets/dark_shade.svg";
import lightShade from "../assets/light_shade.svg";
import transitioningShade from "../assets/transitioning_shade.svg";

function Step5({ nextStep }) {
    const [setURLParam, deleteURLParam] = useURLParams();
    const value = useSelector(selectURLParam("eyewear_type"));

    switch (value) {
    case "211":
        return (
            <Template title="When you're out and about, which shade of lenses do you prefer?">
                <SideImageCard onClick={() => { deleteURLParam("blue_light"); setURLParam("shade", "dark"); nextStep() }} text="Dark Shade" icon={darkShade} />
                <SideImageCard onClick={() => { deleteURLParam("blue_light"); setURLParam("shade", "light"); nextStep() }} text="Light Shade" icon={lightShade} />
                <SideImageCard onClick={() => { deleteURLParam("blue_light"); setURLParam("shade", "transition"); nextStep() }} text="Transitioning Shade" icon={transitioningShade} />
            </Template>
        );
    case "210":
    default:
        return (
            <Template title="Would you like to protect your eyes from light emanating from screens?">
                <Card size="large" onClick={() => { deleteURLParam("shade"); setURLParam("blue_light", "true"); nextStep() }} text="Yes"></Card>
                <Card size="large" onClick={() => { deleteURLParam("shade"); setURLParam("blue_light", "false"); nextStep() }} text="No"></Card>
            </Template>
        );
    }
}

Step5.propTypes = {
    nextStep: PropTypes.func
};

export default Step5;