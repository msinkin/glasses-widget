import React from "react";
import PropTypes from "prop-types";

import Card from "../components/Card";
import Template from "../components/Template";

function Step3_2({ nextStep, update }) {
    return (
        <Template title="What do you need your glasses for?" footer="Skip" footerClick={() => { update("lenstype"); nextStep() }}>
            <Card size="small" onClick={() => { update("lenstype", "6"); nextStep() }} text="Near Vision"></Card>
            <Card size="small" onClick={() => { update("lenstype", "6"); nextStep() }} text="Distance Vision"></Card>
            <Card size="small" onClick={() => { update("lenstype", "7"); nextStep() }} text="Multifocal / Progressive"></Card>
        </Template>
    );
}

Step3_2.propTypes = {
    nextStep: PropTypes.func,
    update: PropTypes.func
};

export default Step3_2;