import React from "react";

const HolaMundo = () => {
  const hello = "Hola Mundo!";
  const isTrue = true;

  return (
    <div className="HolaMundo">
      <h1>{hello}</h1>
      <h2>Curso esencial de React</h2>
      <img src="../../public/logo512.png" alt="React img" />
      {isTrue ? <h4>Esto es verdadero</h4> : <h5>Soy falso</h5>}
      {isTrue && <h4>Soy verdadero</h4>}
    </div>
  );
};

export default HolaMundo;
