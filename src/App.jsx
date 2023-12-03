import React from "react";

import StepWizard from "./components/StepWizard";

import Navbar from "./components/Navbar/Navbar";
import Congrats from "./components/Congrats/Congrats";
import Start from "./components/Start";
import End from "./components/End";

import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3_1 from "./Steps/Step3_1";
import Step3_2 from "./Steps/Step3_2";
import Step4_1 from "./Steps/Step4_1";
import Step4_2 from "./Steps/Step4_2";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import Step7 from "./Steps/Step7";
import Step8 from "./Steps/Step8";
import Step9 from "./Steps/Step9";
import Step10 from "./Steps/Step10";

import styles from "./App.module.scss";

function App () {
    return (
        <StepWizard nav={<Navbar/>} initialStep={1} className={styles.app}>
            <Start stepName="start"/>
            <Step1 stepName="#1"/>
            <Step2 stepName="#2"/>
            <Congrats text="Let's get to know you!" stepName="#3"/>
            <Step3_1 stepName="#3.1"/>
            <Step3_2 stepName="#3.2"/>
            <Step4_1 stepName="#4.1"/>
            <Congrats text="No worries, we've got you!" stepName="#4"/>
            <Step4_2 stepName="#4.2"/>
            <Step5 stepName="#5"/>
            <Step6 stepName="#6"/>
            <Step7 stepName="#7"/>
            <Step8 stepName="#8"/>
            <Step9 stepName="#9"/>
            <Step10 stepName="#10"/>
            <End stepName="end"/>
        </StepWizard>
    );
}

export default App;