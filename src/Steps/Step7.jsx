import React from "react";
import PropTypes from "prop-types";

import Card from "../components/Card";
import Template from "../components/Template";

function Step7({ nextStep, update }) {
    return (
        <Template title="How would you define \nyour facial features?">
            <Card size="small" onClick={() => { update("facial_features", "sharp"); nextStep() }} text="Sharp" />
            <Card size="small" onClick={() => { update("facial_features", "rounded"); nextStep() }} text="Rounded" />
            <Card size="small" onClick={() => { update("facial_features", "between"); nextStep() }} text="In between" />
        </Template>
    );
}

Step7.propTypes = {
    nextStep: PropTypes.func,
    update: PropTypes.func
};

export default Step7;