import React from "react";
import PropTypes from "prop-types";

import ItemsSelector from "../components/ItemsSelector";
import Template from "../components/Template";

import { brands } from "../images";

function Step10({ nextStep, update }) {
    var items = [
        { id: "ray_ban", icon: brands.ray_ban },
        { id: "armani", icon: brands.armani },
        { id: "oakley", icon: brands.oakley },
        { id: "hilary_duff", icon: brands.hilary_duff },
        { id: "gucci", icon: brands.gucci },
        { id: "prada", icon: brands.prada },
        { id: "versace", icon: brands.versace },
        { id: "vogue", icon: brands.vogue },
        { id: "michael_kors", icon: brands.michael_kors },
        { id: "coach", icon: brands.coach },
        { id: "tory_burch", icon: brands.tory_burch },
        { id: "burberry", icon: brands.burberry }
    ];
    return (
        <Template title="Choose your favorite brands" subtitle="You can pick more than one.">
            <ItemsSelector items={items} onButtonClick={(selected) => { update("brand", selected.map((el) => items[el].id)); nextStep() }} />
        </Template>
    );
}

Step10.propTypes = {
    nextStep: PropTypes.func,
    update: PropTypes.func
};

export default Step10;