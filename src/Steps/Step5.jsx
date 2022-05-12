import React from "react";
import PropTypes from "prop-types";

import Card from "../components/Card";
import SideImageCard from "../components/SideImageCard";
import Template from "../components/Template";

import darkShade from "../assets/dark_shade.svg";
import lightShade from "../assets/light_shade.svg";
import transitioningShade from "../assets/transitioning_shade.svg";

function Step5({ data, update, nextStep }) {
    switch (data["eyewear_type"]) {
    case "210":
        return (
            <Template title="Would you like to protect your eyes from light emanating from screens?">
                <Card size="large" onClick={() => { update("shade"); update("blue_light", "true"); nextStep() }} text="Yes"></Card>
                <Card size="large" onClick={() => { update("shade"); update("blue_light", "false"); nextStep() }} text="No"></Card>
            </Template>
        );
    case "211":
        return (
            <Template title="When you're out and about, which shade of lenses do you prefer?">
                <SideImageCard onClick={() => { update("blue_light"); update("shade", "dark"); nextStep() }} text="Dark Shade" icon={darkShade} />
                <SideImageCard onClick={() => { update("blue_light"); update("shade", "light"); nextStep() }} text="Light Shade" icon={lightShade} />
                <SideImageCard onClick={() => { update("blue_light"); update("shade", "transition"); nextStep() }} text="Transitioning Shade" icon={transitioningShade} />
            </Template>
        );
    default:
        return (
            <Template title="Would you like to protect your eyes from light emanating from screens?">
                <Card size="large" onClick={() => { update("shade"); update("blue_light", "true"); nextStep() }} text="Yes"></Card>
                <Card size="large" onClick={() => { update("shade"); update("blue_light", "false"); nextStep() }} text="No"></Card>
            </Template>
        );
    }
}

Step5.propTypes = {
    nextStep: PropTypes.func,
    data: PropTypes.object,
    update: PropTypes.func
};

export default Step5;