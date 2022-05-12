import React from "react";
import PropTypes from "prop-types";

import Card from "../components/Card";
import Template from "../components/Template";

function Step4_2({ nextStep, update }) {
    return (
        <Template title="How wide would you \nsay your face is?" footer="I'm not sure" footerClick={() => { update("frame_size2"); nextStep() }}>
            <Card size="small" onClick={() => { update("frame_size2", "66"); nextStep() }} text="Wider Than Average"></Card>
            <Card size="small" onClick={() => { update("frame_size2", "67"); nextStep() }} text="Average"></Card>
            <Card size="small" onClick={() => { update("frame_size2", "68"); nextStep() }} text="Narrower Than Average"></Card>
        </Template>
    );
}

Step4_2.propTypes = {
    nextStep: PropTypes.func,
    update: PropTypes.func
};

export default Step4_2;