// import "./style.css";
import "./style.scss";

import React, { useState } from "react";
import { render } from "react-dom";

console.log("Hello webpack!");

const fancyFunc = () => {
    return [1, 2];
};

const [a, b] = fancyFunc();

function App() {
    const [state, setState] = useState("CLICK ME");

    return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

render(<App />, document.getElementById("root"));