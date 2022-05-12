import React from "react";
import PropTypes from "prop-types";

import ItemsSelector from "../components/ItemsSelector";
import Template from "../components/Template";

import { glasses } from "../images";

function Step8({ nextStep, update }) {
    var items = [
        { text: "Browline", id: "browline", icon: glasses.browline },
        { text: "Aviator", id: "aviator", icon: glasses.aviator },
        { text: "Geometric", id: "geometric", icon: glasses.geometric },
        { text: "Wayframe", id: "wayframe", icon: glasses.wayframe },
        { text: "Round", id: "round", icon: glasses.round },
        { text: "Oval", id: "oval", icon: glasses.oval },
        { text: "Oversized", id: "oversized", icon: glasses.oversized },
        { text: "Cat Eye", id: "cat_eye", icon: glasses.cat_eye },
        { text: "Rimless", id: "rimless", icon: glasses.rimless },
        { text: "Rectangle", id: "rectangle", icon: glasses.rectangle },
        { text: "Square", id: "square", icon: glasses.square },
        { text: "Wrap", id: "wrap", icon: glasses.wrap }
    ];
    return (
        <Template title="Which frame style are you looking for?" subtitle="You can pick more than one.">
            <ItemsSelector items={items} onButtonClick={(selected) => { update("shape", selected.map((el) => items[el].id)); nextStep() }} />
        </Template>
    );
}

Step8.propTypes = {
    nextStep: PropTypes.func,
    update: PropTypes.func
};

export default Step8;