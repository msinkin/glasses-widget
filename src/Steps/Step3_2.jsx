import React from "react";
import PropTypes from "prop-types";

import { useURLParams } from "../slice/stepSlice";

import Card from "../components/Card";
import Template from "../components/Template";

function Step3_2({ nextStep }) {
    const [setURLParam, deleteURLParam] = useURLParams();

    return (
        <Template title="What do you need your glasses for?" footer="Skip" footerClick={() => { deleteURLParam("lenstype"); nextStep() }}>
            <Card size="small" onClick={() => { setURLParam("lenstype", "6"); nextStep() }} text="Near Vision"></Card>
            <Card size="small" onClick={() => { setURLParam("lenstype", "6"); nextStep() }} text="Distance Vision"></Card>
            <Card size="small" onClick={() => { setURLParam("lenstype", "7"); nextStep() }} text="Multifocal / Progressive"></Card>
        </Template>
    );
}

Step3_2.propTypes = {
    nextStep: PropTypes.func
};

export default Step3_2;