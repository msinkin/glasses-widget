import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "./App";

const elem = document.getElementById("glasses-quiz-widget");
const root = ReactDOM.createRoot(elem);
root.render(<App startURL={elem.getAttribute("data-source")}/>);