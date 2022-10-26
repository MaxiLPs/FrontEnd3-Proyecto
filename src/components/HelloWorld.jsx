import React from "react";

const HelloWorld = (props) => {
  return (
    <>
      <h2>Hola </h2>
      {props.children}
    </>
  );
}

export default HelloWorld;