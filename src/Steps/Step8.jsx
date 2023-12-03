import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import { useURLParams } from "../slice/stepSlice";

import ItemsSelector from "../components/ItemsSelector";
import Template from "../components/Template";

function Step8({ nextStep }) {
    const [setURLParam] = useURLParams();
    const items = useSelector(state => state.step.frameStyles);

    return (
        <Template title="Which frame style are you looking for?" subtitle="You can pick more than one.">
            <ItemsSelector items={items} onButtonClick={(selected) => { setURLParam("shape", selected.map((el) => items[el].id)); nextStep() }} />
        </Template>
    );
}

Step8.propTypes = {
    nextStep: PropTypes.func
};

export default Step8;