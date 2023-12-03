import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import { useURLParams } from "../slice/stepSlice";

import ItemsSelector from "../components/ItemsSelector";
import Template from "../components/Template";

function Step10({ nextStep }) {
    const [setURLParam] = useURLParams();
    const items = useSelector(state => state.step.brands);
    
    return (
        <Template title="Choose your favorite brands" subtitle="You can pick more than one.">
            <ItemsSelector items={items} onButtonClick={(selected) => { setURLParam("brand", selected.map((el) => items[el].id)); nextStep() }} />
        </Template>
    );
}

Step10.propTypes = {
    nextStep: PropTypes.func
};

export default Step10;