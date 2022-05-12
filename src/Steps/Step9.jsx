import React from "react";
import PropTypes from "prop-types";

import Card from "../components/Card";
import Template from "../components/Template";

function Step9({ nextStep, goToNamedStep}) {
    return (
        <Template title="Are you looking for any \nparticular eyewear brands?">
            <Card size="medium" onClick={nextStep} text="Yes, I have some in mind" />
            <Card size="medium" onClick={() => goToNamedStep("end")} text="No, brand isn't important" />
        </Template>
    );
}

Step9.propTypes = {
    nextStep: PropTypes.func,
    goToNamedStep: PropTypes.func
};

export default Step9;