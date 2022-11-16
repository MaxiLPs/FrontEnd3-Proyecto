import { useEffect } from "react";

function Pedido({ state }) {
  useEffect(() => {
    console.log("Componente actualizado");
  }, [state]);

  useEffect(() => {
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  return <p>- Pizza</p>;
}

export default Pedido;
