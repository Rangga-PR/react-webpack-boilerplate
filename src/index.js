import React from "react";
import ReactDom from "react-dom";

const hello = React.createElement("h1", {}, "Hello World, Its ya boiii React");

ReactDom.render(hello, document.getElementById("app"));
