import React from "react";

const App = () => {
  return (
    <>
      <h1 className="hello-world">Hello World, Its ya boiii React</h1>
      <style jsx>
        {`
          .hello-world {
            color: #35627d;

            &:hover {
              color: #c4c4c4;
            }
          }
        `}
      </style>
    </>
  );
};

export default App;
