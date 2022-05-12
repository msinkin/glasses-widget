import React, { useState } from "react";
import PropTypes from "prop-types";

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

function App ({ startURL }) {
    const [data, setData] = useState({});

    function update(parameter, value) {
        let d = { ...data };
        value ? d[parameter] = value : delete d[parameter];
        setData(d);
    }

    function generateURL() {
        const url =  new URL(startURL);
        const searchParams = url.searchParams;
        Object.keys(data).forEach((param) => {
            let groupedParam = param.match(/(^[A-z]+)[0-9]+$/) || [];
            if (groupedParam[1]) {
                let params = searchParams.has(groupedParam[1]) ? searchParams.get(groupedParam[1]).split(",") : [];
                params.push(data[param]);
                searchParams.set("frame_size", params);
            } else searchParams.set(param, data[param]);
        });

        return url.href;
    }

    return (
        <StepWizard nav={<Navbar/>} initialStep={1} className={styles.app}>
            <Start stepName="start"/>
            <Step1 stepName="#1" update={update}/>
            <Step2 stepName="#2" update={update} data={data}/>
            <Congrats text="Let's get to know you!" stepName="#3"/>
            <Step3_1 stepName="#3.1" update={update}/>
            <Step3_2 stepName="#3.2" update={update}/>
            <Step4_1 stepName="#4.1" update={update}/>
            <Congrats text="No worries, we've got you!" stepName="#4"/>
            <Step4_2 stepName="#4.2" update={update}/>
            <Step5 stepName="#5" update={update} data={data}/>
            <Step6 stepName="#6" update={update} data={data}/>
            <Step7 stepName="#7" update={update}/>
            <Step8 stepName="#8" update={update}/>
            <Step9 stepName="#9" update={update}/>
            <Step10 stepName="#10" update={update}/>
            <End stepName="end" generateURL={generateURL}/>
        </StepWizard>
    );
}

App.propTypes = {
    startURL: PropTypes.string
};

export default App;