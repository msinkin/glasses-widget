import React from "react";
import PropTypes from "prop-types";

import { useURLParams } from "../slice/stepSlice";

import Card from "../components/Card";
import Template from "../components/Template";

function Step4_2({ nextStep }) {
    const [setURLParam, deleteURLParam] = useURLParams();

    return (
        <Template title="How wide would you \nsay your face is?" footer="I'm not sure" footerClick={() => { deleteURLParam("frame_size2"); nextStep() }}>
            <Card size="small" onClick={() => { setURLParam("frame_size2", "66"); nextStep() }} text="Wider Than Average"></Card>
            <Card size="small" onClick={() => { setURLParam("frame_size2", "67"); nextStep() }} text="Average"></Card>
            <Card size="small" onClick={() => { setURLParam("frame_size2", "68"); nextStep() }} text="Narrower Than Average"></Card>
        </Template>
    );
}

Step4_2.propTypes = {
    nextStep: PropTypes.func
};

export default Step4_2;