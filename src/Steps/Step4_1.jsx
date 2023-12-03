import React from "react";
import PropTypes from "prop-types";

import { useURLParams } from "../slice/stepSlice";

import Template from "../components/Template";
import SideCard from "../components/SideCard";

import Sizes from "../assets/sizes.svg";

function Step4_1({ nextStep }) {
    const [setURLParam, deleteURLParam] = useURLParams();

    return (
        <Template title="What's your current \nframe size?" footer="I don't know" footerClick={() => { deleteURLParam("frame_size1"); nextStep() }}>
            <img style={{ margin: "0 auto 36px auto", pointerEvents: "none" }} width="318" height="118" src={Sizes} alt="sizes"/>
            <SideCard onClick={() => { setURLParam("frame_size1", "68"); nextStep() }} left="Small" right="42-48 mm"></SideCard>
            <SideCard onClick={() => { setURLParam("frame_size1", "67"); nextStep() }} left="Medium" right="49-53 mm"></SideCard>
            <SideCard onClick={() => { setURLParam("frame_size1", "66"); nextStep() }} left="Large" right="54-58 mm"></SideCard>
        </Template>
    );
}

Step4_1.propTypes = {
    nextStep: PropTypes.func
};

export default Step4_1;