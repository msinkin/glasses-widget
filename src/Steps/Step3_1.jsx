import React from "react";
import PropTypes from "prop-types";

import Card from "../components/Card";
import Template from "../components/Template";

function Step3_1({ nextStep, goToNamedStep }) {
    return (
        <Template title="Do you need vision correction?" footer="Skip" footerClick={nextStep}>
            <Card size="medium" onClick={nextStep} text="Yes"/>
            <Card size="medium" onClick={() => goToNamedStep("#4.1")} text="No"/>
        </Template>
    );
}

Step3_1.propTypes = {
    nextStep: PropTypes.func,
    goToNamedStep: PropTypes.func
};

export default Step3_1;