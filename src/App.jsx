import React from "react";
import styled from "styled-components";

const HelloWorld = styled.h1`
  color: #35627d;

  &:hover {
    color: #c4c4c4;
  }
`;

const App = () => {
  return (
    <HelloWorld className="hello-world">
      Hello World, Its ya boiii React
    </HelloWorld>
  );
};

export default App;
